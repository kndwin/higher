import { nanoid } from "nanoid";
import { forwardRef, useState, useRef } from "react";
import type { HTMLAttributes, ChangeEvent } from "react";
import { styled } from "stitches.config";

import { Action } from "./Action";
import { Text, Flex, Input, Tooltip } from "components/shared";
import { PlusIcon, FileIcon, FolderIcon, ChevronIcon } from "components/icons";
import {
  useClickOutside,
  useFiles,
  useFileUpload,
  useModules,
  useFileAttachments,
} from "hooks";
import type { TreeItems } from "../types";
import { setProperty, addItem, findItemDeep } from "../utilities";
import { DialogConfirmDeleteItem } from "./DialogConfirmDeleteItem";
import { useSession } from "next-auth/react";

export interface Props extends HTMLAttributes<HTMLLIElement> {
  childCount?: number;
  clone?: boolean;
  collapsed?: boolean;
  depth: number;
  disableInteraction?: boolean;
  disableSelection?: boolean;
  ghost?: boolean;
  handleProps?: any;
  indicator?: boolean;
  indentationWidth: number;
  value: string;
  onCollapse?(): void;
  onRemove?(): void;
  wrapperRef?(node: HTMLLIElement): void;
  type: "file" | "folder";
  label: string;
  setItems: (items: TreeItems) => void;
  items: TreeItems;
}

export const Item = forwardRef<HTMLDivElement, Props>(
  (
    {
      childCount,
      clone,
      depth,
      disableInteraction,
      disableSelection,
      ghost,
      handleProps,
      indentationWidth,
      indicator,
      collapsed,
      onCollapse,
      onRemove,
      style,
      value,
      wrapperRef,
      type,
      label: labelProp,
      setItems,
      items,
      ...props
    },
    ref
  ) => {
    const fileRef = useRef(null);
    const { data: session } = useSession();
    const { setSelectedFile, selectedFile } = useFiles();
    const { selectedModule } = useModules();
    const { createFileAttachment } = useFileAttachments();
    const { uploadFile } = useFileUpload();

    const [label, setLabel] = useState(labelProp);
    const [isEditLabel, setIsEditLabel] = useState(false);
    const labelRef = useClickOutside(() => handleItemUpdate({ label }));

    const handleItemUpdate = ({ label }) => {
      const newItems = [...items];
      setProperty(newItems, value, "label", (prevLabel) => label);
      setItems(newItems);
      setIsEditLabel(false);
    };

    const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
      let newItems = [];
      for (const file of e.target.files) {
        const item = {
          label: file.name,
          id: nanoid(),
          type: "file" as const,
          children: [],
        };

        // Temporary show uploaded file for better UX
        const newTempItem = {
          ...item,
          fileUrl: URL.createObjectURL(file),
        };
        setSelectedFile(newTempItem);

        // Upload file to server
        const fileUrl = await uploadFile({
          file,
          folder: `users/${session.user.id}/modules/${selectedModule.id}/files/${item.id}`,
        });
        const newFileAttachment = await createFileAttachment({
          data: {
            highlights: [],
            module: {
              connect: {
                id: selectedModule.id,
              },
            },
            fileUrl,
            id: item.id,
          },
        });
        const newItem = {
          ...item,
          fileUrl,
        };
        newItems = addItem(items, newItem, value);
      }
      setItems(newItems);
    };

    const handleFileSelection = () => {
      const selectedItem = findItemDeep(items, value);
      if (selectedItem?.type === ("file" as const)) {
        setSelectedFile(selectedItem);
      }
    };

    return (
      <Li
        css={{
          ml: `${indentationWidth * depth}px`,
          width: `calc(100% - ${indentationWidth * depth}px)`,
        }}
        ghost={ghost}
        clone={clone}
        indicator={indicator}
        ref={wrapperRef}
        selected={selectedFile?.id === value}
        onClick={() => handleFileSelection()}
        {...props}
      >
        <StyledItemContainer ref={ref} style={style}>
          <StyledFileLabelContainer>
            <Action css={{ size: "2em", color: "$slate12" }} {...handleProps}>
              {type === "file" && <FileIcon />}
              {type === "folder" && <FolderIcon />}
            </Action>
            {onCollapse && (
              <Action css={{ br: "$round" }} onClick={onCollapse}>
                <ChevronIcon orientation={collapsed ? "down" : "up"} />
              </Action>
            )}
            {isEditLabel ? (
              <Input
                css={{ width: "100%", pointerEvents: "all" }}
                ref={labelRef}
                autoFocus
                value={label}
                size={8}
                type="text"
                onBlur={() => handleItemUpdate({ label })}
                onChange={(e) => setLabel(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    handleItemUpdate({ label });
                  }
                }}
              />
            ) : (
              <StyledFileLabel onClick={() => setIsEditLabel(true)}>
                {label}
              </StyledFileLabel>
            )}
          </StyledFileLabelContainer>
          {type === "folder" && (
            <Action onClick={() => fileRef.current.click()}>
              <PlusIcon />
              <HiddenInput
                onChange={(e) => handleFileUpload(e)}
                type="file"
                accept=".pdf"
                ref={fileRef}
              />
            </Action>
          )}
          <Flex
            css={{
              w: "fit-content",
              jc: "flex-start",
            }}
          >
            {!clone && onRemove && (
              <DialogConfirmDeleteItem
                item={findItemDeep(items, value)}
                onRemove={onRemove}
              />
            )}
            {clone && childCount && childCount > 1 ? (
              <Text as="span">{childCount}</Text>
            ) : null}
          </Flex>
        </StyledItemContainer>
      </Li>
    );
  }
);

const StyledItemContainer = styled(Flex, {
  stroke: "$slate12",
  width: "100%",
  justifyContent: "space-between",
  p: "$2",
});

const StyledFileLabelContainer = styled(Text, {
  display: "contents",
  gap: "$1",
  width: "100%",
  justifyContent: "flex-start",
  px: "$2",
  py: "$1",
});

const StyledFileLabel = styled(Text, {
  mx: "$2",
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const HiddenInput = styled("input", {
  display: "none",
});

const Li = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  background: "$slate1",
  br: "$1",
  width: "100%",
  "&:hover": {
    background: "$slate4",
  },
  variants: {
    indicator: {
      true: {},
    },
    ghost: {
      true: {
        "&:not(.indicator)": {
          opacity: 0.5,
        },
        "& > *": {
          background: "transparent",
        },
      },
    },
    clone: {
      true: {
        width: "fit-content",
      },
    },
    selected: {
      true: {
        background: "$slate4",
      },
    },
  },
  compoundVariants: [
    {
      ghost: true,
      indicator: true,
      css: {
        marginBottom: "$3",
        "& > div": {
          position: "relative",
          p: 0,
          height: "$3",
          borderColor: "$cyan6",
          background: "$cyan8",
          "& > *": {
            opacity: 0,
            height: 0,
            "&:hover": {
              opacity: 0,
              height: 0,
            },
          },
        },
      },
    },
  ],
});
