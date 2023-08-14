import './globals.css'
import Navbar from '../components/Global/Navbar';
import Footer from '../components/Global/Footer';
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
        <meta property="description" content="Compute the Future Foundation strives to educate young students in computer science and technology."/>
        <meta property="og:image" content="../images/cff-meta-image.png" />
        <link href="https://api.fontshare.com/v2/css?f[]=zodiak@401&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <Navbar/>
          <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}