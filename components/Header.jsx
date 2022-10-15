import Head from "next/head";
import React from "react";

const Header = () => {
  const keywords = [
    "Queen's",
    "Queen's University",
    "Queen's University COMPSA",
    "Queen's University Computing Society",
    "Queen's University Computer Science Society",
    "Queen's University Computing",
    "Queen's University Computer Science",
    "COMPSA",
    "Computing Society",
    "Computer Science Society",
    "Computing",
    "Computer Science",
    "CS",
    "CS Society",
    "CS Club",
    "Computer Science Club",
  ];

  const keywordsContent = keywords.join(", ");

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <title>Queen&lsquo;s Compsa</title>
      <meta name="title" content="Queen's COMPSA" />
      <meta
        name="description"
        content="Homepage for Queen's Computing Students' Association"
      />
      <meta name="keywords" content={keywordsContent} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://compsa.ca/" />
      <meta property="og:title" content="Queen's COMPSA" />
      <meta
        property="og:description"
        content="Homepage for Queen's Computing Students' Association"
      />
      <meta property="og:image" content="https://compsa.ca/preview.jpeg" />

      {/* Twitter*/}
      <meta property="twitter:card" content="https://compsa.ca/preview.jpeg" />
      <meta property="twitter:url" content="https://compsa.ca/" />
      <meta property="twitter:title" content="Queen's COMPSA" />
      <meta
        property="twitter:description"
        content="Homepage for Queen's Computing Students' Association"
      />
      <meta property="twitter:image" content="https://compsa.ca/preview.jpeg" />
    </Head>
  );
};

export default Header;
