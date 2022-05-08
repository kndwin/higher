import type { FC } from "react";
import type { ComponentProps } from "@stitches/react";
import { styled, keyframes } from "@stitches/react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

type TooltipProps = FC<TooltipPrimitive.TooltipProps> & {
  Trigger?: FC<TooltipPrimitive.TooltipTriggerProps>;
  Content?: FC<ComponentProps<typeof StyledContent>>;
};

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

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: "$2",
  padding: "$2",
  fontSize: "$2",
  backgroundColor: "$light",
  boxShadow: "$5",
  lineHeight: 1,
  fontFamily: "$primary",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
  variants: {
    color: {
      dark: {
        backgroundColor: "$slate12",
        color: "$slate1",
      },
    },
  },
});

const StyledTrigger = styled(TooltipPrimitive.Trigger, {
  all: "unset",
  border: "none",
  size: "fit-content",
});

// Exports
export const Tooltip: TooltipProps = TooltipPrimitive.Root;
Tooltip.Trigger = StyledTrigger;
Tooltip.Content = StyledContent;
