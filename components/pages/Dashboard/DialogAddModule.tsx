import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { BoxIcon } from "components/icons";
import { Icon, Button, Text, Input, Dialog, Grid } from "components/shared";
import { ModuleCard } from "./shared";
import { useFiles, useModules, useToast } from "hooks";

import { ModuleCreateInput, ModuleType } from "graphql/client/generated";
import { useSession } from "next-auth/react";

const modules = [
  {
    label: ModuleType.Research,
    icon: <BoxIcon />,
  },
  {
    label: ModuleType.Note,
    icon: <BoxIcon />,
    disabled: true,
  },
];

type FormValues = {
  name: string;
};

export const DialogAddModule = () => {
  const router = useRouter();
  const { setToast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selected, setSelected] = useState<ModuleType>(ModuleType.Research);
  const { createModule, createModuleResult } = useModules();
  const { data: session } = useSession();

  const { register, handleSubmit } = useForm();
  const { newFolder } = useFiles();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const createModuleData: ModuleCreateInput = {
      name: data.name,
      type: selected,
      user: {
        connect: {
          id: session?.user?.id,
        },
      },
      fileStructure: [newFolder],
    };
    const createdModule = await createModule({ data: createModuleData });

    setDialogOpen(false);
  };

  useEffect(() => {
    if (Boolean(createModuleResult.error)) {
      setDialogOpen(false);
      setToast({
        title: "Error",
        description: "Something went wrong in creating the module",
        color: "error",
      });
      console.log({ error: createModuleResult.error });
    } else if (Boolean(createModuleResult.data)) {
      setToast({
        title: "Success",
        description: "Module created successfully",
        color: "success",
      });
    }
  }, [createModuleResult]);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <Button>{`Add Module`}</Button>
      </Dialog.Trigger>
      <Dialog.Content as="form" onSubmit={handleSubmit(onSubmit)}>
        <Dialog.Title>{`Add a module`}</Dialog.Title>
        <Dialog.Description>
          {`Select a module below to start`}
        </Dialog.Description>
        <Text as="label">{`Module name`}</Text>
        <Input
          name="name"
          css={{ width: "100%", mb: "$3", mt: "$1" }}
          placeholder="Enter name for module (e.g. ENGG-1000 Engineering)"
          {...register("name", { required: true })}
        />
        <Text as="label">{`Module`}</Text>
        <Grid css={{ gridTemplateColumns: "1fr 1fr", gridGap: "$3", mt: "$1" }}>
          {modules.map(({ label, icon, disabled }) => (
            <ModuleCard
              key={label}
              onSelection={() => setSelected(label)}
              selected={label === selected}
              disabled={disabled}
            >
              <Icon css={{ mr: "$2" }}>{icon}</Icon>
              <Text css={{ textTransform: "uppercase" }}>{label}</Text>
            </ModuleCard>
          ))}
        </Grid>
        <Grid css={{ gridTemplateColumns: "1fr 1fr", gridGap: "$3", mt: "$3" }}>
          <Dialog.Close asChild>
            <Button
              state={createModuleResult.fetching ? "disabled" : "default"}
              color="error"
            >{`Cancel`}</Button>
          </Dialog.Close>
          <Button
            state={createModuleResult.fetching ? "loading" : "default"}
            color="accent"
            type="submit"
          >{`Submit`}</Button>
        </Grid>
      </Dialog.Content>
    </Dialog>
  );
};
