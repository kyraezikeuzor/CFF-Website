/*
'use client'
import React from 'react'
import styles from './Modal.module.css'
import Tags from './Tags'

export const Modal = ({setShowModal, src, title, text, tags}) => {

    return (
        <div onClick={()=>setShowModal(false)} className={styles.overlay}>
            <button onClick={()=>setShowModal(false)}>X</button>
            <div className={styles.modal}>
                <div className={styles["modal-container"]}>
                    <img src={src}></img>
                    <div className={styles["modal-items"]}>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <Tags>{tags}</Tags>
                    </div>
                </div>
            </div>
        </div>
    );
};
*/