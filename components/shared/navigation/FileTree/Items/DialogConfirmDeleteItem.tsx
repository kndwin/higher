import { useState, useEffect } from "react";

import { Flex, Text, Button, Dialog, Icon } from "components/shared";
import { CrossIcon, FolderIcon, FileIcon } from "components/icons";
import { useFiles, useFileAttachments, useToast } from "hooks";

import { Action } from "./Action";

export const DialogConfirmDeleteItem = ({ item, onRemove }) => {
  const { setToast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { setSelectedFile } = useFiles();
  const { deleteFileAttachment, deleteFileAttachmentResult } =
    useFileAttachments();

  const handleRemoveItem = async () => {
    const deletedFile = await deleteFileAttachment({
      where: {
        id: item.id,
      },
    });
  };

  useEffect(() => {
    if (Boolean(deleteFileAttachmentResult.data)) {
      setToast({
        title: "Success",
        description: `Module ${item?.label} has been deleted`,
        color: "success",
      });
      setSelectedFile(null);
      onRemove();
    } else if (Boolean(deleteFileAttachmentResult.error)) {
      setToast({
        title: "Error",
        description: `Something went wrong with deleting ${item?.label}`,
        color: "error",
      });
    }
  }, [deleteFileAttachmentResult]);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <Action css={{ size: "$3" }}>
          <CrossIcon />
        </Action>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>{`Delete ${item.type}`}</Dialog.Title>
        <Dialog.Description>
          {`Are you sure you want to delete ${item.type}`}
        </Dialog.Description>
        <Flex
          css={{
            background: "$slate3",
            border: "1px solid $slate6",
            px: "$2",
            py: "$1",
            br: "$1",
            width: "fit-content",
            mb: "$3",
          }}
        >
          <Icon css={{ mr: "$2" }}>
            {item?.type === "file" ? <FileIcon /> : <FolderIcon />}
          </Icon>
          <Text>{`${item?.label}`}</Text>
        </Flex>
        {item.type === ("folder" as const) && item.children.length > 0 && (
          <Flex css={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text as="h3">{`The following files will also be removed`}</Text>
            <Flex
              as="ul"
              css={{
                alignItems: "flex-start",
                flexDirection: "column",
                gap: "$1",
              }}
            >
              {item.children.map(({ id, label }) => (
                <Text as="li" key={id}>
                  {label}
                </Text>
              ))}
            </Flex>
          </Flex>
        )}
        <Flex css={{ justifyContent: "space-between" }}>
          <Dialog.Close asChild>
            <Button color="secondary">{`Cancel`}</Button>
          </Dialog.Close>
          <Button
            state={deleteFileAttachmentResult.fetching ? "loading" : "default"}
            autoFocus
            onClick={() => handleRemoveItem()}
            color="error"
          >{`Delete`}</Button>
        </Flex>
      </Dialog.Content>
    </Dialog>
  );
};
