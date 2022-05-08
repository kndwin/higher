import { styled } from "stitches.config";
import { CheckIcon } from "components/icons";
import { Icon } from "components/shared";
import type { CSS } from "@stitches/react";
import type { MouseEventHandler } from "react";

type ModuleCardProps = {
  children: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onSelection?: () => void;
  [props: string]: any;
};

export const ModuleCard = ({
  children,
  selected = false,
  disabled = false,
  onSelection,
  ...props
}: ModuleCardProps) => (
  <StyledModule
    onClick={() => onSelection()}
    selected={selected}
    disabled={disabled}
  >
    {selected && (
      <Icon
        type="outlined"
        css={{
          position: "absolute",
          top: "$2",
          right: "$2",
          minSize: "$2",
        }}
      >
        <CheckIcon />
      </Icon>
    )}
    {children}
  </StyledModule>
);

const StyledModule = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  background: "$bg1",
  borderRadius: "$1",
  p: "$2",
  cursor: "pointer",
  position: "relative",
  transition: "background 0.2s ease",
  "&:hover": {
    background: "$bg2",
  },
  variants: {
    selected: {
      true: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "$fg",
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },
  },
});
