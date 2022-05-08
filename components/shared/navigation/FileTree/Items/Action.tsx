import { Ref, forwardRef } from "react";
import { CSS } from "@stitches/react";
import { Icon } from "components/shared";
import type { HTMLAttributes, CSSProperties } from "react";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  active?: {
    fill: string;
    background: string;
  };
  cursor?: CSSProperties["cursor"];
  css?: CSS;
}

export const Action = forwardRef<HTMLDivElement, Props>(
  ({ active, cursor, style, children, css, ...props }, ref) => {
    return (
      <Icon
        as="button"
        tabIndex={0}
        type="hover"
        css={{
          ...css,
          cursor,
          br: "$2",
          border: "none",
          "--fill": active?.fill,
          "--background": active?.background,
        }}
        {...props}
      >
        {children}
      </Icon>
    );
  }
);
