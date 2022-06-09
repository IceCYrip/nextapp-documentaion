import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Styled = () => {
  return (
    <div>
      <Head>
        <title>Styling Methods</title>
      </Head>
      <Navbar />
      <div className={styles.main}>
        <h3> This is styled using GLOBAL css</h3>
        <div className={styles.diffstyles}>
          <h3> This is styled using COPONENT-LEVEL css</h3>
        </div>
      </div>
    </div>
  );
};

export default Styled;
