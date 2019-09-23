import React, { useState, useEffect } from "react";

import LoginRegister from "./login";
import UploadAndPay from "./upload";

import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Pay2Print</title>
      </Head>

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

export default Home;
