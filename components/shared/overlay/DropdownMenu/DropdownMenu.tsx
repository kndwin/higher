import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { styled } from "stitches.config";
import { keyframes } from "@stitches/react";

type DropdownMenuProps = React.FC<DropdownMenuPrimitive.DropdownMenuProps> & {
  Trigger?: React.FC<DropdownMenuPrimitive.DropdownMenuTriggerProps>;
  Content?: React.FC<DropdownMenuPrimitive.DropdownMenuContentProps>;
  Item?: React.FC<DropdownMenuPrimitive.DropdownMenuItemProps>;
  CheckboxItem?: React.FC<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps>;
  RadioItem?: React.FC<DropdownMenuPrimitive.DropdownMenuRadioItemProps>;
  TriggerItem?: React.FC<DropdownMenuPrimitive.DropdownMenuTriggerItemProps>;
};

export const DropdownMenu: DropdownMenuProps = DropdownMenuPrimitive.Root;

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledTrigger = styled(DropdownMenuPrimitive.Trigger, {
  all: "unset",
  border: "none",
  background: "transparent",
});

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 150,
  backgroundColor: "$bg",
  borderRadius: 6,
  padding: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const itemStyles = {
  all: "unset",
  fontSize: "$2",
  fontFamily: "$primary",
  color: "$fg",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  height: "$4",
  padding: "0 $1",
  position: "relative",
  paddingLeft: "$3",
  userSelect: "none",
  cursor: "pointer",

  "&[data-disabled]": {
    color: "$fg",
    pointerEvents: "none",
  },

  "&:focus": {
    backgroundColor: "$bg1",
    color: "$fg",
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, {
  ...itemStyles,
});
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, {
  ...itemStyles,
});
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...itemStyles,
});

const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
  '&[data-state="open"]': {
    backgroundColor: "$fg1",
    color: "$bg1",
  },
  ...itemStyles,
});

DropdownMenu.Trigger = StyledTrigger;
DropdownMenu.Content = StyledContent;
DropdownMenu.Item = StyledItem;
DropdownMenu.CheckboxItem = StyledCheckboxItem;
DropdownMenu.RadioItem = StyledRadioItem;
DropdownMenu.TriggerItem = StyledTriggerItem;
