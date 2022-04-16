import { useContext } from "react";

import { styled } from "stitches.config";
import { Icon, Group } from "components/shared";
import { DoubleChevronIcon } from "components/icons";

import { ContainerContext, SIDEBAR_WIDTH } from "./Container";

export const Header = ({ children }) => {
  const { isSidebarOpen, setIsSidebarOpen, setSidebarWidth } =
    useContext(ContainerContext);
  const handleSidebarOpen = () => {
		console.log('clicked')
    setIsSidebarOpen(true);
    setSidebarWidth(SIDEBAR_WIDTH.MIN);
  };
  return (
    <StyledHeader>
      <Group position="center" css={{ gap: "$2" }}>
        {!isSidebarOpen && (
          <Icon type="filled" onClick={() => handleSidebarOpen()}>
            <DoubleChevronIcon orientation="right" />
          </Icon>
        )}
        {children}
      </Group>
    </StyledHeader>
  );
};

const StyledHeader = styled("header", {
  display: "flex",
  alignItems: "center",
  background: "$bg",
  p: "$2",
});
