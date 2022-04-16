import type { AppProps } from "next/app";
import Script from "next/script";
import { globalStyles } from "stitches.config";

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Script
        async
        defer
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        src={process.env.NEXT_PUBLIC_UMAMI_SRC_URL}
      />
      <Component {...pageProps} />
    </>
  );
}
