import React from "react";
import { styled, keyframes, CSS } from "@stitches/react";
import { CrossIcon } from "components/icons";
import { Icon, Text } from "components/shared";

import * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogProps = React.FC<DialogPrimitive.DialogProps> & {
  Trigger?: React.FC<DialogPrimitive.DialogTriggerProps>;
  Content?: React.FC<DialogPrimitive.DialogContentProps & CSS>;
  Title?: React.FC<DialogPrimitive.DialogTitleProps>;
  Description?: React.FC<DialogPrimitive.DialogDescriptionProps>;
  Close?: React.FC<DialogPrimitive.DialogCloseProps>;
};

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  zIndex: 2147483648,
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  zIndex: 2147483649,
  backgroundColor: "white",
  borderRadius: "$2",
  boxShadow: "$1",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: "$3",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  "&:focus": { outline: "none" },
});

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>
        {children}
        <DialogPrimitive.Close asChild>
          <Icon
            type="hover"
            css={{ br: "9999px", position: "absolute", right: "$2", top: "$2" }}
          >
            <CrossIcon />
          </Icon>
        </DialogPrimitive.Close>
      </StyledContent>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontFamily: "$primary",
  fontSize: "$5",
  fontWeight: "bold",
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: "$2 0 $3",
  fontFamily: "$primary",
  color: "$slate12",
  fontSize: "$3",
  whiteSpace: "pre-wrap",
});

export const Dialog: DialogProps = DialogPrimitive.Root;
Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Content = Content;
Dialog.Title = StyledTitle;
Dialog.Description = StyledDescription;
Dialog.Close = DialogPrimitive.Close;
