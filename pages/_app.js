import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import store from '../app/store';
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon'></link>
        <script
          src='//code.tidio.co/alhl8bxzmelnwlobjulzu0zczsp4x2xr.js'
          async
        ></script>
        <title>Covidopedia | Your Health Our Priority</title>
      </Head>
      <Provider store={store}>
           <ToastContainer position='top-center' autoClose={2000} />
           <Component {...pageProps} />
      </Provider>
    </>
  )

 

}

export default MyApp
