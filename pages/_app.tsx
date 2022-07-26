import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";
import Head from 'next/head'

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const url = `https://fake.fm${router.route}`

  return(
    <>
    <Head>
      <title>FAKEWORLD</title>
      <link rel="icon" href="/icon.ico" />
    </Head>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} canonical={url} key={url} />
    </AnimatePresence>
    </>
  )
}

export default MyApp
