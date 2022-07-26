import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const url = `http://localhost:3000${router.route}`

  return(
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} canonical={url} key={url} />
    </AnimatePresence>
  )
}

export default MyApp
