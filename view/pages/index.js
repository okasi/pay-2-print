import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
const ReblocksPayment = dynamic(
  () => import("reblocks").then(mod => mod.ReblocksPayment),
  {
    ssr: false
  }
);

export default function uploadAndPay() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadPressed, setUploadPressed] = useState(false);

  const types = ["image/png", "image/jpeg"];

  function onChangeHandler(event) {
    setSelectedFile(null);
    setUploadPressed(false);
    let file = event.target.files[0];

    console.log("selected file: " + file.name);

    if (types.every(type => file.type !== type)) {
      alert(file.type + " is not a supported format.");
      return false;
    }
    if (file.size > 350000) {
      alert(file.name + " is too large.");
      return false;
    }

    setSelectedFile(event.target.files[0]);
  }

  function onClickHandler() {
    selectedFile ? setUploadPressed(true) : null;
    console.log("Pay time");
  }

  function onPaymentSuccess(transaction) {
    console.log("Payment successful, transaction token: " + transaction.token);
    const data = new FormData();
    data.append("file", selectedFile);
    const baseURL = process.env.REACT_APP_API_URL;
    axios
      .post(`${baseURL}/upload`, data, {})
      .then(res => {
        console.log(res.statusText);
      })
      .catch(err => {
        alert(err.message);
        console.log(err);
      });
  }

  return (
    <div>
      <center>
        <div
          style={{
            backgroundColor: "LightSlateGrey",
            borderRadius: "8px",
            width: "50%",
            padding: "5vmin"
          }}
        >
          {!uploadPressed && (
            <>
              <input
                type="file"
                name="file"
                accept="image/png, image/jpeg"
                onChange={onChangeHandler}
              />
              <br></br>
              <br></br>
              <button type="button" onClick={onClickHandler}>
                Upload
              </button>
            </>
          )}

          {uploadPressed && selectedFile && (
            <ReblocksPayment
              accountId="xrb_3x7uimec6g77d36xnqfweoyd5eesnu94gbw9ugfbnoyb9r5g8muxmqnwkf9s"
              amount={161803}
              onPaymentSuccess={onPaymentSuccess}
            />
          )}
        </div>
      </center>
    </div>
  );
}
