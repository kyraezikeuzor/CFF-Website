import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    target,
    path,
    onClick, 
    buttonStyle, 
    buttonSize
}) => 
{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
       <Link href={`${path}`} className="btn-mobile">
            <button className={`${styles.btn} ${styles[checkButtonStyle]} ${styles[checkButtonSize]}`} onClick={onClick} type={type}>
                {children}
            </button>
       </Link>
        
    );
};


export default Button;