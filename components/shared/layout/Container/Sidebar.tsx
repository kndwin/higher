import { useCallback, useRef, useState, useEffect, useContext } from "react";
import type { MouseEvent, ReactNode } from "react";

import { styled } from "stitches.config";
import { Flex, Icon } from "components/shared";
import { LogoIcon, DoubleChevronIcon } from "components/icons";

import { SIDEBAR_WIDTH, ContainerContext } from "./Container";
import { CSS } from "@stitches/react/types/css-util";

export const Sidebar = ({
  children,
  css,
}: {
  children?: ReactNode;
  css: CSS;
}) => {
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
      } else {
        e.preventDefault();
      }
    },
    [isResizing, setSidebarWidth]
  );

  useEffect(() => {
    document.addEventListener("mousemove", resize as any);
    document.addEventListener("mouseup", stopResizing as any);
    return () => {
      document.removeEventListener("mousemove", resize as any);
      document.removeEventListener("mouseup", stopResizing as any);
    };
  }, [resize, stopResizing]);

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
    setSidebarWidth(0);
  };

  return (
    <Container
      css={{
        transition: `${!isResizing && "all"} 0.2s ease-in-out`,
        width: sidebarWidth,
        maxWidth: sidebarWidth,
        minWidth: isSidebarOpen ? SIDEBAR_WIDTH.MIN : 0,
        opacity: isSidebarOpen ? "1" : "0",
        borderWidth: isSidebarOpen ? "3px" : "0",
        ...css,
      }}
      ref={sidebarRef}
    >
      <Content>
        <Flex css={{ justifyContent: "space-between" }}>
          <Icon>
            <LogoIcon />
          </Icon>
          <Icon type="filled" onClick={() => handleSidebarClose()}>
            <DoubleChevronIcon />
          </Icon>
        </Flex>
        {children}
      </Content>
      <Resizer onMouseDown={startResizing} />
    </Container>
  );
};

const Container = styled("div", {
  position: "relative",
  width: "100%",
  display: "flex",
  background: "$slate1",
  borderRight: "3px solid $slate4",
  overflowX: "hidden",
});

const Content = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  p: "$3",
  width: "100%",
});

const Resizer = styled("div", {
  position: "absolute",
  right: 0,
  width: "$2",
  height: "100%",
  justifySelf: "flex-end",
  cursor: "col-resize",
  resize: "horizontal",
  "&:hover": {
    background: "$slate4",
  },
});
