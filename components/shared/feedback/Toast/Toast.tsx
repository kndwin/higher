import * as ToastPrimitive from "@radix-ui/react-toast";
import { styled, keyframes } from "@stitches/react";
import { CSS } from "@stitches/react";
import { Button } from "components/shared";
import type { ComponentProps } from "@stitches/react";
import type { FC } from "react";

type ToastProps = FC<ComponentProps<typeof StyledToast>> & {
  Viewport?: FC<ToastPrimitive.ToastViewportProps>;
  Title?: FC<ToastPrimitive.ToastTitleProps>;
  Description?: FC<ToastPrimitive.ToastDescriptionProps>;
  Action?: FC<ToastPrimitive.ToastActionProps>;
  Close?: FC<ToastPrimitive.ToastCloseProps>;
};

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 2147483647,
  outline: "none",
});

const StyledToast = styled(ToastPrimitive.Root, {
  zIndex: 2147483649,
  backgroundColor: "white",
  borderRadius: "$2",
  boxShadow: "$2",
  padding: "$3",
  display: "grid",
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: "auto max-content",
  columnGap: "$3",
  alignItems: "center",
  position: "relative",

  "@media (prefers-reduced-motion: no-preference)": {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in forwards`,
    },
    '&[data-swipe="move"]': {
      transform: "translateX(var(--radix-toast-swipe-move-x))",
    },
    '&[data-swipe="cancel"]': {
      transform: "translateX(0)",
      transition: "transform 200ms ease-out",
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out forwards`,
    },
  },
  variants: {
    color: {
      success: {
        color: "$grass11",
        background: "$grass5",
      },
      error: {
        color: "$red11",
        background: "$red5",
      },
    },
  },
  defaultVariants: {
    color: "success",
  },
});

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: "title",
  marginBottom: 5,
  color: "currentColor",
  fontWeight: 500,
  fontSize: "$3",
  fontFamily: "$primary",
});

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: "description",
  margin: 0,
  color: "currentColor",
  fontSize: "$2",
  fontFamily: "$primary",
});

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: "action",
});

// Exports
export const ToastProvider = ToastPrimitive.Provider;
export const Toast: ToastProps = StyledToast;
Toast.Viewport = StyledViewport;
Toast.Title = StyledTitle;
Toast.Description = StyledDescription;
Toast.Action = StyledAction;
Toast.Close = ToastPrimitive.Close;
