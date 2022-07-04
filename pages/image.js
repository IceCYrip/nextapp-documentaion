import React from "react";
import Image from "next/image";
import imagetag from "../public/imagetag.jpg";
import imageimp from "../public/import.jpg";
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
        <h2>These images are imported using Image component of next.js</h2>
        <div className={styles.images}>
          <Image src={imageimp} width={400} height={40} />
          <br />
          <br />
          <Image src={imagetag} width={800} height={250} />
        </div>
      </div>
    </div>
  );
};

export default image;
