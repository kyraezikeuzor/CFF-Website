'use client'
import React, {useState} from 'react'
import {Button} from './Button'
import styles from './Section.module.css'
import Tags from './Tags'
import Link from 'next/link'
import {Modal} from './Modal'

export default function Section({
    src, alt, title, type, text, showBtn, modalText, modalTags, tags, flexDirection, flexOrder, imageSize
  }) {

    const [showModal, setShowModal] = useState(false);

    const flexOrders = ['', 'row-reverse'];
    const checkFlexOrder = flexOrders.includes(flexOrder) ? flexOrder : flexOrders[0];

    const flexDirections = ['row', 'column'];
    const checkFlexDirection = flexDirections.includes(flexDirection) ? flexDirection : flexDirections[0];

    const imageSizes = ['large', 'medium'];
    const checkImageSize = imageSizes.includes(imageSize) ? imageSize : imageSizes[0];

    const showBtns = [true, false];
    const checkShowBtn = showBtns.includes(showBtn) ? showBtn : showBtns[0];

  return (
    <section className={ `${styles["section"]} ${styles[checkImageSize]} ${styles[checkFlexDirection]} ${styles[checkFlexOrder]}`}>
        <img src={src} alt={alt}></img>

        <div className={styles["section-text-container"]}>
            <h4>{type}</h4>
            <h3>{title}</h3>
          
            <p>{text}</p>

            <Tags>
              {tags}
            </Tags>

            {/*{checkShowBtn && <button onClick={() => setShowModal(true)}>Learn More</button>}*/}
          
        </div>
        {/*{showModal && <Modal setShowModal={setShowModal} src={src} title={title} text={modalText} tags={modalTags}/>}*/}
    </section>
  )
}
