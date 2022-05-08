import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  Flex,
  Input,
  Text,
  Grid,
  Card,
  Badge,
  DropdownMenu,
  Icon,
  Button,
  Dialog,
} from "components/shared";

import type { Module } from "graphql/client/generated";
import { DotsHorizontal } from "components/icons";
import { useModules, useToast } from "hooks";
import { styled } from "@stitches/react";

export const DialogConfirmDeleteModule = ({ module }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const { deleteModule, deleteModuleResult } = useModules();
  const { setToast } = useToast();

  const handleModuleDelete = async () => {
    await deleteModule({
      where: { id: module.id },
    });
  };

  useEffect(() => {
    if (Boolean(deleteModuleResult.error)) {
      setToast({
        title: "Error",
        description: `Something went wrong with deleting ${module.name}`,
        color: "error",
      });
      console.log({ error: deleteModuleResult.error });
    } else if (Boolean(deleteModuleResult.data)) {
      setToast({
        title: "Success",
        description: `Module ${module.name} has been deleted`,
        color: "success",
      });
      setDialogOpen(false);
    }
  }, [deleteModuleResult]);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <Button type="button" color="error" css={{ width: "100%", mt: "$2" }}>
          {`Delete module`}
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>{`Delete module`}</Dialog.Title>
        <Dialog.Description>
          {`Are you sure you want to delete module - ${module.name}?\n`}
        </Dialog.Description>
        <Input
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          css={{ width: "100%", mb: "$3" }}
          placeholder={`Type ${module.name} to confirm delete`}
        />
        <Flex css={{ justifyContent: "space-between" }}>
          <Dialog.Close asChild>
            <Button color="secondary">{`Cancel`}</Button>
          </Dialog.Close>
          <Button
            onClick={() => handleModuleDelete()}
            state={
              deleteModuleResult.fetching
                ? "loading"
                : moduleName === module.name
                ? "default"
                : "disabled"
            }
            color="error"
          >{`Delete`}</Button>
        </Flex>
      </Dialog.Content>
    </Dialog>
  );
};
