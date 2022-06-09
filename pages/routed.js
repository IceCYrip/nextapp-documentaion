import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const routed = () => {
  return (
    <div>
      <Head>
        <title>Succesfully routed</title>
      </Head>
      <Navbar />
      <div className={styles.main}>
        <h2>Routed here using Link component using next/link</h2>
      </div>
    </div>
  );
};

export default routed;
