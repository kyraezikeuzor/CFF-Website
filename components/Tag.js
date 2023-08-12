'use client'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './Tag.module.css'

export const Tag = ({children}) => {
    return (
        <div className={styles.tag}>
            <p>{children}</p>
        </div>
    )
}

export default Tag;