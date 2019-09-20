import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  function onChangeHandler(event) {
    console.log(event.target.files[0]);
    let file = event.target.files[0];
    const types = ["image/png", "image/jpeg"];
    if (types.every(type => file.type !== type)) {
      alert(file.type + " is not a supported format.");
      return false;
    }
    if (file.size > 350000) {
      alert(file + " is too large.");
      return false;
    }
    setSelectedFile(event.target.files[0]);
  }

  function onClickHandler() {
    const data = new FormData();
    data.append("file", selectedFile);
    axios.post("http://localhost:3000/upload", data, {}).then(res => {
      console.log(res.statusText);
    });
  }

  return (
    <div>
      {/* <Head>
        <title>Home</title>
      </Head>

      <Link href="/login">
        <a>
          <h2>Admin Login</h2>
        </a>
      </Link> */}

      <input type="file" name="file" onChange={onChangeHandler} />
      <button type="button" onClick={onClickHandler}>
        Upload
      </button>
    </div>
  );
};

export default Home;
