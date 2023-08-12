import React from 'react';
import {Button} from './Button';
import styles from './Card.module.css';
import Tags from './Tags'
import Link from 'next/link';

export const Card = ({
  btnText, src, alt, title, type, text, tags, flexOrder
}) => 
{
  const flexOrders = ['row', 'row-reverse'];
  const checkFlexOrder = flexOrders.includes(flexOrder) ? flexOrder : flexOrders[0];

  return (
    <div className={ `${styles["card-container"]} ${styles[checkFlexOrder]}`}>
        <img src={src} alt={alt} className={styles['card-img']}></img>

        <div className={styles["card-text-container"]}>
          <h3>{title}</h3>
          <h4>{type}</h4>
          
          <p>{text}</p>
          <Tags>
            {tags}
          </Tags>
          
          <Button className={styles['btn']} buttonStyle='btn--primary' buttonSize='btn--large'>
            {btnText}
          </Button>
        </div>
    </div>
  );
};

export default Card;
