import { useCallback, useRef, useState, useEffect } from "react";
import { Context, createContext } from "react";
import { styled } from "stitches.config";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface ContextProps {
  sidebarWidth: number;
  setSidebarWidth: (width: number) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}
export const ContainerContext: Context<ContextProps> = createContext(null);

export enum SIDEBAR_WIDTH {
  MIN = 260,
  MAX = 500,
}

export const Container = ({ children, ...props }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_WIDTH.MIN);

  return (
    <ContainerContext.Provider
      value={{
        sidebarWidth,
        setSidebarWidth,
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      <StyledContainer {...props}>{children}</StyledContainer>
    </ContainerContext.Provider>
  );
};

const StyledContainer = styled("div", {
  $$pageWidth: "60em",
  width: "100%",
  minHeight: "100vh",
  height: "100%",
  display: "flex",
  variants: {
    type: {
      page: {
        maxWidth: "$$pageWidth",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        mx: "auto",
      },
      dashboard: {
        minWidth: "100vw",
      },
    },
  },
  defaultVariants: {
    type: "dashboard",
  },
});

Container.Sidebar = Sidebar;
Container.Header = Header;
