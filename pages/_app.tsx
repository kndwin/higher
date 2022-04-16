import Script from "next/script";
import { globalStyles } from "stitches.config";
import { SessionProvider, useSession } from "next-auth/react";
import type { ProtectedAppProps } from "types/auth";

export interface AuthEnabledComponentConfig {
  authenticationEnabled: boolean;
}

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: ProtectedAppProps) {
  globalStyles();
  return (
    <>
      <Script
        async
        defer
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        src={process.env.NEXT_PUBLIC_UMAMI_SRC_URL}
      />
      <SessionProvider session={session}>
        {Component?.authenticationEnabled ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </>
  );
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return null;
  }

  return children;
}
