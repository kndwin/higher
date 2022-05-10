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
        const fileUrl = await uploadFile({ file });
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
				console.log({ newItems })
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
        <Flex
          css={{ width: "100%", justifyContent: "space-between" }}
          ref={ref}
          style={style}
        >
          <Flex
            css={{
              gap: "$1",
              width: "100%",
              justifyContent: "flex-start",
              px: "$2",
              py: "$1",
            }}
          >
            <Action css={{ size: "$3" }} {...handleProps}>
              {type === "file" && <FileIcon />}
              {type === "folder" && <FolderIcon />}
            </Action>
            {onCollapse && (
              <Action css={{ br: "$round" }} onClick={onCollapse}>
                <ChevronIcon orientation={collapsed ? "down" : "up"} />
              </Action>
            )}
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
            {isEditLabel ? (
              <Input
                ref={labelRef}
                autoFocus
                value={label}
                size={8}
                onBlur={() => handleItemUpdate({ label })}
                onChange={(e) => setLabel(e.target.value)}
              />
            ) : (
              <Text
                onClick={() => setIsEditLabel(true)}
                as="span"
                css={{ mr: "$2", whiteSpace: "nowrap", width: "fit-content" }}
              >
                {label}
              </Text>
            )}
          </Flex>
          <Flex
            css={{
              width: "fit-content",
              justifyContent: "flex-start",
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
        </Flex>
      </Li>
    );
  }
);

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
