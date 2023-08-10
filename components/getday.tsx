import React from "react";
import Head from "next/head";

export const Getday = () => {
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var seperator = "/";
  const TITLE = "Ongun Demirağ | " + month + seperator + year;
  return (
    <Head>
      <title>{TITLE}</title>
    </Head>
  );
};

export const DisplayDate = () => {
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var seperator = "/";
  var signature = " ©OngunDemirag-";
  return (
    <div className="text-sm">
      <p>
        {" "}
        {signature} {month} {seperator} {year}{" "}
      </p>
    </div>
  );
};
