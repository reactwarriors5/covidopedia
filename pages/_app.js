import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import store from '../app/store'
import { Provider } from 'react-redux'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
let persistor = persistStore(store);

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
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer position='top-center' autoClose={2000} />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
