import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState, useId, useTransition, useEffect } from "react";

import { BoxIcon } from "components/icons";
import {
  Icon,
  Button,
  Text,
  Input,
  Dialog,
  Grid,
} from "components/shared";
import { ModuleCard } from "./shared";
import { useModules } from "hooks";

const modules = [
  {
    label: "research",
    icon: <BoxIcon />,
  },
  {
    label: `note taking\n(Coming soon)`,
    icon: <BoxIcon />,
    disabled: true,
  },
];

type FormValues = {
  name: string;
};

export const DialogAddModule = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("research");
  const { createModule, createModuleResult } = useModules();
  const id = useId();

  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      await createModule({
        data: {
          name: data.name,
          type: selected,
        },
      });
      setIsOpen(false);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log({ createModuleResult });
		if (Boolean(createModuleResult.error)) {
			setIsOpen(false);
		}
  }, [createModuleResult]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
              state={loading ? "disabled" : "default"}
              color="error"
            >{`Cancel`}</Button>
          </Dialog.Close>
          <Button
            state={loading ? "loading" : "default"}
            color="accent"
            type="submit"
          >{`Submit`}</Button>
        </Grid>
      </Dialog.Content>
    </Dialog>
  );
};
