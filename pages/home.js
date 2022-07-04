import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <div className={styles.main}>
        <h2>This is home page</h2>
      </div>
    </div>
  );
};

export default home;
