import React, { useState, useEffect } from "react";

import LoginRegister from "./signin";
import UploadAndPay from ".";

import Link from "next/link";
import Head from "next/head";

import cookie from "cookie";
import { useApolloClient } from "@apollo/react-hooks";
import { withApollo } from "../lib/apollo";
// import redirect from "../lib/redirect";
import dynamic from "next/dynamic";
const redirect = dynamic(
  () => import("../lib/redirect").then(mod => mod.redirect),
  {
    ssr: false
  }
);
import checkLoggedIn from "../lib/checkLoggedIn";

const IndexPage = ({ loggedInUser }) => {
  const apolloClient = useApolloClient();
  const signout = () => {
    document.cookie = cookie.serialize("token", "", {
      maxAge: -1 // Expire the cookie immediately
    });

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    apolloClient.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      // redirect({}, "/signin");
    });
  };

  return (
    <>
      <Head>
        <title>Pay2Print</title>
      </Head>

      {loggedInUser.user && (
        <>
          Hello {loggedInUser.user.name}!<br />
          <button onClick={signout}>Sign out</button>
        </>
      )}

      <Link href="/login">
        <a>
          <button title="login"></button>
        </a>
      </Link>

      {/* <LoginRegister /> */}
      {/* <UploadAndPay /> */}
    </>
  );
};

IndexPage.getInitialProps = async context => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient);

  if (!loggedInUser.user) {
    // If not signed in, send them somewhere more useful
    // redirect(context, "/signin");
  }

  return { loggedInUser };
};

export default withApollo(IndexPage);
