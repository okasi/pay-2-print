import React from "react";
import Link from "next/link";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Link href="/login">
      <a>
        <h2>Admin Login</h2>
      </a>
    </Link>
  </div>
);

export default Home;
