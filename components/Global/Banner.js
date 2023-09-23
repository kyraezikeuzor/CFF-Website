import React from 'react';
import styles from './Banner.module.css';


function Banner(props) {
    return (
        <div className={styles.banner}>{props.text}</div>
    )
};


export default Banner;