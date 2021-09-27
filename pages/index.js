import Head from 'next/head'
import HomePage from '../components/HomePage/HomePage/HomePage/HomePage'
import 'antd/dist/antd.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Covidopedia</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePage />
    </div>
  )
}
