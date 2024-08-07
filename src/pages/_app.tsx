import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Press_Start_2P } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'


// Initialize the font
const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

//in app.tsx we have nothing special except the import of the global styles and the font

export default function App({ Component, pageProps }: AppProps) {
  return <>
  
  <Provider store={store}>
  <main className={pressStart2P.className} style={{ margin: 0, padding: 0 }}>
    <Component {...pageProps} />
  </main>
  </Provider>
  
  </>
}
