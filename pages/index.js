import HomePage from '../components/HomePage/HomePage/HomePage/HomePage'
import 'antd/dist/antd.css'
import Head from "next/head";
import HomePage from "../components/HomePage/HomePage/HomePage/HomePage";
import ServiceDetailsPage from "../components/ServiceDetailsPage/ServiceDetailsPage/ServiceDetailsPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Covidopedia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <HomePage /> */}
      <ServiceDetailsPage />
    </div>
  )
}
