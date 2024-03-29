import { useContext, forwardRef } from "react";
import { useSession, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { styled } from "stitches.config";
import {
  Icon,
  Flex,
  Avatar,
  DropdownMenu,
  Button,
  IconButton,
} from "components/shared";
import { DoubleChevronIcon, PersonIcon } from "components/icons";

import { ContainerContext, SIDEBAR_WIDTH } from "./Container";

export const Header = ({ children }) => {
  const { isSidebarOpen, setIsSidebarOpen, setSidebarWidth } =
    useContext(ContainerContext);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(true);
    setSidebarWidth(SIDEBAR_WIDTH.MIN);
  };

  return (
    <StyledHeader data-cy="dashboard-header">
      <Flex css={{ justifyContent: "space-between" }}>
        <Flex css={{ gap: "$2", width: "fit-content" }}>
          {!isSidebarOpen && (
            <Icon type="filled" onClick={() => handleSidebarOpen()}>
              <DoubleChevronIcon orientation="right" />
            </Icon>
          )}
          {children}
        </Flex>
        <Flex css={{ gap: "$2", width: "fit-content" }}>
          <ButtonDarkMode />
          <DropdownMenuProfile />
        </Flex>
      </Flex>
    </StyledHeader>
  );
};

const StyledHeader = styled("header", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  background: "$slate1",
  py: "$3",
  px: "$3",
  borderBottom: "3px solid $slate4",
});

const DropdownMenuProfile = () => {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger css={{ br: "$round", p: 0 }}>
        <Avatar css={{ cursor: "pointer", size: "$4" }}>
          <Avatar.Image src={session?.user?.image} alt="User image" />
          <Avatar.Fallback delayMs={500}>{`NA`}</Avatar.Fallback>
        </Avatar>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content sideOffset={12}>
        <DropdownMenu.Item onClick={() => signOut({ callbackUrl: "/" })}>
          Logout
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};

export const ButtonDarkMode = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <IconButton css={{ br: "$round", size: "$4" }} onClick={toggleTheme}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};
