import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//#2589BD #187795 #38686A #A3B4A2 #CDC6AE

export default function Home() {
  return (
    <div>
      <Head>
        <title>Assignment application</title>
      </Head>
      <Navbar />
      <div className={styles.body}>
        <h3>Body</h3>
      </div>
      <Footer />
    </div>
  );
}
