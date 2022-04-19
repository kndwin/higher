import Script from "next/script";
import { globalStyles } from "stitches.config";
import type { ProtectedAppProps } from "types/auth";

import { Auth, SuperProviders } from "components/providers";

export interface AuthEnabledComponentConfig {
  authenticationEnabled: boolean;
}
const ConditionalWrapper = ({ condtion, wrapper, children }) =>
  condtion ? wrapper(children) : children;

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
      <SuperProviders>
        <ConditionalWrapper
          condtion={Component?.authenticationEnabled}
          wrapper={(children) => <Auth>{children}</Auth>}
        >
          <Component {...pageProps} />
        </ConditionalWrapper>
      </SuperProviders>
    </>
  );
}

