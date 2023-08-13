'use client'
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { Button } from './Button';
import styles from './Navbar.module.css';
import pageData from '../../content/pages.json';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import icons
import {faXmark, faBars} from "@fortawesome/free-solid-svg-icons";

function toPath(item) {
  let finalString = '/' + item.toLowerCase().replaceAll(" ", "-");

  return finalString;
}

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  useEffect(() => {
    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    }

    showButton([])

    window.addEventListener('resize', showButton);
    
  }, []);
  
  let itemList=pageData.map((item,index) => {
    if (item == "Home") {
        return <li className={styles["nav-item"]} key={index}> <Link onClick={closeMobileMenu} className={styles["nav-links"]} target="_blank" href="/">{item}</Link></li>
    }
    else {
        return <li className={styles["nav-item"]} key={index}> <Link  onClick={closeMobileMenu} className={styles["nav-links"]} target="_blank" href={toPath(item)} >{item} </Link></li>
    }
    
  })

  return (
    <nav className={styles["nav"]}>
        <nav className={styles.navbar}>
          
            <div className={styles["navbar-container"]}>
                <Link href='/' className={styles["navbar-logo"]} onClick={closeMobileMenu}> 
                    <Image width={40} height={40} src='/images/computethefuturelogo.png' alt="" />
                    Compute the Future Foundation
                </Link>

                <div className={styles["menu-icon"]} onClick={handleClick}>
                  <FontAwesomeIcon icon={click ? faXmark : faBars } className={click ? styles['fa-times'] : styles['fa-bars']}></FontAwesomeIcon>
                </div>

                <ul className={click ? `${styles['nav-menu']} ${styles.active}` : styles['nav-menu']}>
                  {itemList}
                  {button && <Button path='https://www.paypal.com/donate/?hosted_button_id=UP3ZGFTQ7YZ96' buttonStyle='btn--outline'>Make a Contribution</Button>}
                </ul>
            </div>
        </nav>
        <div className={styles["scroll-container"]}>
            <p className={styles["scroll-text"]}>* Our Spring and Summer Youth Computer Science Virtual Camps for Grades 3-8 Are in Session - Sign Up Today! *</p>
        </div>
    </nav>
  )
}

export default Navbar;
