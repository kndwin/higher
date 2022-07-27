import { useRef, useEffect } from "react";

export const useMouseDown = () => {
  const isMouseDownRef = useRef(false);

  const onMouseDown = (event: MouseEvent) => {
    isMouseDownRef.current = true;
  };
  const onMouseUp = (event: MouseEvent) => {
    isMouseDownRef.current = false;
  };

  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return { isMouseDown: isMouseDownRef.current };
};
