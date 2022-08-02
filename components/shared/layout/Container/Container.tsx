import { useState } from "react";
import { Context, createContext } from "react";
import { styled } from "stitches.config";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { StyledMain } from "./Main";
import { Toast, Button, Icon } from "components/shared";
import { useToast } from "hooks";
import { CrossIcon } from "components/icons";

interface ContextProps {
  sidebarWidth: number | string;
  setSidebarWidth: (width: number | string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}
export const ContainerContext: Context<ContextProps> = createContext(null);

export enum SIDEBAR_WIDTH {
  MIN = 260,
  MAX = 1200,
}

export const Container = ({ children, ...props }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState<number | string>(
    SIDEBAR_WIDTH.MIN
  );

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
      <ToastInContainer />
    </ContainerContext.Provider>
  );
};

const ToastInContainer = () => {
  const {
    open: openToast,
    setOpen: setOpenToast,
    data: dataToast,
  } = useToast();

  return (
    <>
      <Toast
        duration={dataToast.durationInMs}
        open={openToast}
        onOpenChange={setOpenToast}
        color={dataToast.color}
      >
        <Toast.Title>{dataToast.title}</Toast.Title>
        <Toast.Description>{dataToast.description}</Toast.Description>
        {dataToast.action && (
          <Toast.Action asChild altText="action">
            <Button color={dataToast.color} onClick={dataToast.action.onClick}>
              {dataToast.action.label}
            </Button>
          </Toast.Action>
        )}
        {dataToast.close && (
          <Toast.Close asChild>
            <Icon
              type="hover"
              css={{
                br: "9999px",
                position: "absolute",
                right: "$2",
                top: "$2",
              }}
            >
              <CrossIcon />
            </Icon>
          </Toast.Close>
        )}
      </Toast>
      <Toast.Viewport />
    </>
  );
};

const StyledContainer = styled("div", {
  $$pageWidth: "70em",
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
        px: "$3",
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
Container.Main = StyledMain;
