import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Logo.module.css'

export const Logo = ({}) => {
  return (
    <Link href='/' className={styles["logo"]}> 
        <Image width={40} height={40} src='/images/computethefuturelogo.png' alt="" />
            Compute the Future Foundation
    </Link>
  )
}

export default Logo;