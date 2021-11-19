// import App from "next/app";

import type { AppProps /*, AppContext */ } from "next/app";
import Layout from "../components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";

import "../normalize.css";
import "../components/styles/styles.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </UserProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
