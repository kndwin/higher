import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import { Provider as GraphQLClientProvider } from "urql";
import { client as graphqlClient } from "graphql/client";
import { Provider as ToastProvider } from "@radix-ui/react-toast";
import { Provider as TooltipProvider } from "@radix-ui/react-tooltip";
import type { ReactNode, FC } from "react";
import type { Session } from "next-auth";

const composeWrappers = (wrappers: FC[]): FC => {
  return wrappers.reduce((Acc: FC, Current: any) => {
    return (props: any) => (
      <Current>
        <Acc {...props} />
      </Current>
    );
  });
};

export const SuperProviders: any = composeWrappers([
  ({ session, children }: { session: Session; children: JSX.Element }) => (
    <SessionProvider session={session}>{children}</SessionProvider>
  ),
  ({ children }: { children: JSX.Element }) => (
    <GraphQLClientProvider value={graphqlClient}>
      {children}
    </GraphQLClientProvider>
  ),
  ({ children }: { children: JSX.Element }) => (
    <ToastProvider>{children}</ToastProvider>
  ),
  ({ children }: { children: JSX.Element }) => (
    <TooltipProvider>{children}</TooltipProvider>
  ),
]);

export const Auth = ({ children }) => {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return null;
  }

  return children;
};
