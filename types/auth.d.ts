import type { AppProps } from "next/app";
import type { NextComponentType, NextPageContext } from "next";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentWithAuth<PropsType = any> = React.FC<PropsType> &
  AuthEnabledComponentConfig;

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/ban-types
type NextComponentWithAuth = NextComponentType<NextPageContext, any, {}> &
  Partial<AuthEnabledComponentConfig>;

type ProtectedAppProps = AppProps & { Component: NextComponentWithAuth };
