import type { AppProps } from "next/app";
import type { NextComponentType, NextPageContext } from "next";
import type { ReactElement, FC } from "react";

export interface AuthEnabledComponentConfig {
  authenticationEnabled: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentWithAuth<PropsType = any> = React.FC<PropsType> &
  AuthEnabledComponentConfig;

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/ban-types
type NextComponentWithAuth = NextComponentType<NextPageContext, any, {}> &
  Partial<AuthEnabledComponentConfig>;

export type ProtectedAppProps = AppProps & { Component: NextComponentWithAuth };
