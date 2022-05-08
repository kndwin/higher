import Script from "next/script";
import { globalStyles } from "stitches.config";
import type { ProtectedAppProps } from "types/auth.d";
import type { ReactNode } from "react";

import { Auth, SuperProviders } from "components/providers";
import { ConditionalWrapper } from "components/shared";

import "pdfjs-dist/web/pdf_viewer.css";

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
          wrapper={(children: ReactNode) => <Auth>{children}</Auth>}
        >
          <Component {...pageProps} />
        </ConditionalWrapper>
      </SuperProviders>
    </>
  );
}
