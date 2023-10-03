import './globals.css'
import Navbar from '../components/Global/Navbar';
import Footer from '../components/Global/Footer';
import head from 'next/head';
import { Inter } from 'next/font/google';
import Banner from '../components/Global/Banner';

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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <Navbar/>
          <main>{children}</main>
        {/*<Banner text="Compute the Future Foundation strives to educate the young students in our areas in computer science and technology. Our goal is to impact the youth in our local communities by giving them the tools necessary to expand their interests and aspirations."/>*/}
        <Footer/>
      </body>
    </html>
  )
}