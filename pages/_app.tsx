import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/main.scss'
import '../styles/grid.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
