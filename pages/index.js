import Head from "next/head";
import HomePage from "../components/HomePage/HomePage/HomePage/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Covidopedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
