import React from "react";
import Image from "next/image";
import sampleimg from "../public/sampleimage.webp";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

const image = () => {
  return (
    <div>
      <Head>
        <title>Image</title>
      </Head>
      <Navbar />
      <div className={styles.main}>
        <h2>This image is imported using Image component of next.js</h2>
        <Image src={sampleimg} width={200} height={200} />
      </div>
    </div>
  );
};

export default image;
