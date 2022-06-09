import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Assignment application</title>
      </Head>
      <div className={styles.body}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
      </div>
    </div>
  );
}
