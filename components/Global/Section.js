import React from 'react'
import {Button} from './Button'
import styles from './Section.module.css'
import Tags from './Tags'

export default function Section({
    src, alt, title, type, text, tags, flexOrder, imageSize
  }) {
    const flexOrders = ['row', 'row-reverse'];
    const checkFlexOrder = flexOrders.includes(flexOrder) ? flexOrder : flexOrders[0];

    const imageSizes = ['large', 'medium'];
    const checkImageSize = imageSizes.includes(imageSize) ? imageSize : imageSizes[0];


  return (
    <section className={ `${styles["section"]} ${styles[checkFlexOrder]} ${styles[checkImageSize]}`}>
        <img src={src} alt={alt}></img>

        <div className={styles["section-text-container"]}>
            <h4>{type}</h4>
            <h3>{title}</h3>
          
          <p>{text}</p>
          <Tags>
            {tags}
          </Tags>
          
        </div>
    </section>
  )
}
