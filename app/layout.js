import './globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import head from 'next/head';
import { Inter } from 'next/font/google';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Compute the Future Foundation</title>
        <meta property="description" content=""/>
        <meta property="og:image" content="../images/cff-meta-image" />
      </head>
      <body className={inter.className}>
        <Navbar/>
          <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}