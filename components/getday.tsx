import React from "react";
import Head from "next/head";
import Favicon from "./Favicon";

export const Getday = () => {
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var seperator = "/";
  const TITLE = "Ongun Demirağ | " + month + seperator + year;
  return (
    <Head>
      <title>{TITLE}</title>
      <Favicon />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="keywords"
        content="Ongun Demirag, software engineer, front end dev, back end dev, full stack developer, personal site, portfolio site, projects and resume"
      />
      <meta property="og:title" content="Ongun Demirag, software developer." />
      <meta name="keywords" content="Ongun Demirag, software developer." />

      <meta
        name="description"
        content="Personal website of Ongun Demirag, software developer."
      />
      <meta
        property="og:description"
        content="Personal website of Ongun Demirag, software developer."
      />
    </Head>
  );
};

export const DisplayDate = () => {
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var seperator = "/";
  var signature = " © OngunDemirag-";
  return (
    <div className="text-sm">
      <p>
        {" "}
        {signature} {month} {seperator} {year}{" "}
      </p>
    </div>
  );
};
