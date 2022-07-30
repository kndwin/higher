import { useCallback, useRef, useState, useEffect, useContext } from "react";
import type { MouseEvent, ReactNode } from "react";

import { styled } from "stitches.config";
import { Flex, Icon } from "components/shared";
import { LogoIcon, DoubleChevronIcon } from "components/icons";

import { SIDEBAR_WIDTH, ContainerContext } from "./Container";
import { CSS } from "@stitches/react/types/css-util";
import {
  useResizer,
  Resizer,
} from "components/shared/layout/Container/Resizer";

export const Sidebar = ({
  children,
  css,
}: {
  children?: ReactNode;
  css: CSS;
}) => {
  const { setSidebarWidth, sidebarWidth, setIsSidebarOpen, isSidebarOpen } =
    useContext(ContainerContext);

  const { isResizing, startResizing, ref } = useResizer({
    setWidth: setSidebarWidth,
    min: SIDEBAR_WIDTH.MIN,
    max: SIDEBAR_WIDTH.MAX,
  });

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
    setSidebarWidth(0);
  };

  return (
    <Container
      style={{
        width: sidebarWidth,
        maxWidth: sidebarWidth,
      }}
      css={{
        transition: `${!isResizing && "all"} 0.2s ease-in-out`,
        minWidth: isSidebarOpen ? SIDEBAR_WIDTH.MIN : 0,
        opacity: isSidebarOpen ? "1" : "0",
        borderWidth: isSidebarOpen ? "3px" : "0",
        ...css,
      }}
      ref={ref}
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
      <Resizer css={{ right: 0 }} onMouseDown={startResizing as any} />
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
