import React from "react";
import LoginButton from "../assets/button/login";
import RegisterButton from "../assets/button/register";

import Link from "next/link";

export default function loginRegister() {
  return (
    <div>
      <br />

      <Link href="/register">
        <a>
          <RegisterButton />
        </a>
      </Link>

      <br />

      <LoginButton />

      <br />
    </div>
  );
}
