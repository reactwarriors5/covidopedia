import HomePage from "../components/HomePage/HomePage/HomePage/HomePage";
import "antd/dist/antd.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Covidopedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
