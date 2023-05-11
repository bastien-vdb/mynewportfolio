import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import '@/styles/Home.css';
import Navbar from '@/components/Navbar';
import "@/styles/Navbar.css";
import "@/styles/Projects.css";
import Footer from '@/components/Footer';
import "@/styles/Footer.css";
import "@/styles/ProjectDisplay.css";
import "@/styles/Buttons.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
