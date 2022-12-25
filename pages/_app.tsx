import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

declare module "next-auth" {
  interface Session {
    id: string;
  }
}

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) => {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
};

export default App;
