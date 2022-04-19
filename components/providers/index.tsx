import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import { Provider as GraphQLClientProvider } from "urql";
import { client as graphqlClient } from "graphql/client";
import { Provider as ToastProvider } from '@radix-ui/react-toast'

const composeWrappers = (
  wrappers: React.FunctionComponent[]
): React.FunctionComponent => {
  return wrappers.reduce((Acc, Current): React.FunctionComponent => {
    return (props) => (
      <Current>
        <Acc {...props} />
      </Current>
    );
  });
};

export const SuperProviders = composeWrappers([
  (props) => (
    <SessionProvider session={props.session}>{props.children}</SessionProvider>
  ),
  (props) => (
    <GraphQLClientProvider value={graphqlClient}>
      {props.children}
    </GraphQLClientProvider>
  ),
	(props) => (
		<ToastProvider>
			{props.children}
		</ToastProvider>
	)
]);

export const Auth = ({ children }) => {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return null;
  }

  return children;
}
