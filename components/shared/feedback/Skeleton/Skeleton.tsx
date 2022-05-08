import { styled } from "stitches.config";
import { keyframes } from "@stitches/react";

const fadeLeftToRight = keyframes({
  "0%, 100%": {
    opacity: 1,
  },
  "75%": {
    opacity: 0.5,
  },
});

const shimmer = keyframes({
  "100%": {
    transform: "translateX(100%)",
  },
});

export const shimmerCSS = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  transform: `translateX(-100%)`,
  background:
    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
  animation: `${shimmer} 2s infinite`,
  content: "''",
};

export const Skeleton = styled("div", {
  size: "100%",
  br: "$2",
  backgroundColor: "$slate7",
  position: "relative",
  overflow: "hidden",
  display: "inline-block",
  "&::after": {
    ...shimmerCSS,
  },
});
