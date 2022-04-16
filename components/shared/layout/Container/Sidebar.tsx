import { useCallback, useRef, useState, useEffect, useContext } from "react";
import type { MouseEvent } from "react";

import { styled } from "stitches.config";
import { Group, Icon } from "components/shared";
import { LogoIcon, DoubleChevronIcon } from "components/icons";

import { SIDEBAR_WIDTH, ContainerContext } from "./Container";

export const Sidebar = ({ children }) => {
  const { setSidebarWidth, sidebarWidth, setIsSidebarOpen, isSidebarOpen } =
    useContext(ContainerContext);
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback((e: MouseEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback((e: MouseEvent) => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const width =
          e.clientX - sidebarRef.current.getBoundingClientRect().left;
        if (width < SIDEBAR_WIDTH.MIN) {
          setSidebarWidth(SIDEBAR_WIDTH.MIN);
        } else if (width > SIDEBAR_WIDTH.MAX) {
          setSidebarWidth(SIDEBAR_WIDTH.MAX);
        } else {
          setSidebarWidth(width);
        }
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize as any);
    window.addEventListener("mouseup", stopResizing as any);
    return () => {
      window.removeEventListener("mousemove", resize as any);
      window.removeEventListener("mouseup", stopResizing as any);
    };
  }, [resize, stopResizing]);

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
    setSidebarWidth(0);
  };

  return (
    <Container
      css={{
        transition: `${!isResizing && "width"} 0.2s ease-in-out`,
        width: sidebarWidth,
        opacity: isSidebarOpen ? "1" : "0",
      }}
      ref={sidebarRef}
      onMouseDown={(e: MouseEvent) => e.preventDefault()}
    >
      <Content>
        <Group position="apart">
          <Icon>
            <LogoIcon />
          </Icon>
          <Icon type="filled" onClick={() => handleSidebarClose()}>
            <DoubleChevronIcon />
          </Icon>
        </Group>
        {children}
      </Content>
      <Resizer onMouseDown={startResizing} />
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  background: "$bg",
  borderRight: "3px solid $bg1",
});

const Content = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  p: "$3",
	pr: "$1"
});

const Resizer = styled("div", {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: "$2",
  justifySelf: "flex-end",
  cursor: "col-resize",
  resize: "horizontal",
  "&:hover": {
    background: "$bg2",
  },
});
