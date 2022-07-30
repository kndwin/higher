import { useState, useCallback, useEffect, useRef } from "react";
import { styled } from "stitches.config";

type UseResizerProps = {
  setWidth: (width: number) => void;
  min: number;
  max: number;
  direction?: "left" | "right";
};

export const useResizer = ({
  setWidth,
  min,
  max,
  direction = "right",
}: UseResizerProps) => {
  const ref = useRef(null);
  const [isResizing, setIsResizing] = useState(false);

  const stopResizing = useCallback((e: MouseEvent) => {
    setIsResizing(false);
  }, []);

  const startResizing = useCallback((e: MouseEvent) => {
    setIsResizing(true);
  }, []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        let width: number = 0;
        if (direction === "right") {
          width = e.clientX - ref.current.getBoundingClientRect().left;
        } else {
          width = -(e.clientX - ref.current.getBoundingClientRect().right);
        }
        console.log({
          width,
          bound: ref.current.getBoundingClientRect(),
          client: e.clientX,
          direction,
        });
        if (width < min) {
          setWidth(min);
        } else if (width > max) {
          setWidth(max);
        } else {
          setWidth(width);
        }
      }
    },
    [isResizing, setWidth]
  );

  useEffect(() => {
    document.addEventListener("mousemove", resize as any);
    document.addEventListener("mouseup", stopResizing as any);
    return () => {
      document.removeEventListener("mousemove", resize as any);
      document.removeEventListener("mouseup", stopResizing as any);
    };
  }, [resize, stopResizing]);

  return { ref, isResizing, startResizing };
};

export const Resizer = styled("div", {
  position: "absolute",
  width: "$2",
  height: "100%",
  justifySelf: "flex-end",
  cursor: "col-resize",
  resize: "horizontal",
  "&:hover": {
    background: "$slate4",
  },
});
