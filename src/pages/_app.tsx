import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Press_Start_2P } from 'next/font/google'

// Initialize the font
const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})



export default function App({ Component, pageProps }: AppProps) {
  return <>
  <main className={pressStart2P.className} style={{ margin: 0, padding: 0 }}>
    <Component {...pageProps} />
  </main>
  </>
}
