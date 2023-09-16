import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Logo.module.css'

export const Logo = ({}) => {
  return (
    <Link href='/' className={styles["logo"]}> 
      <img src='/images/cff_logo_transparent.png' alt="" />
    </Link>
  )
}

export default Logo;