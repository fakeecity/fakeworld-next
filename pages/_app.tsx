import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const url = `https://fake.fm${router.route}`

  return(
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} canonical={url} key={url} />
    </AnimatePresence>
  )
}

export default MyApp
