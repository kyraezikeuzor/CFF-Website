import React, {useState} from 'react'
import styles from './Accordion.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import icons
import {faChevronRight, faChevronDown} from "@fortawesome/free-solid-svg-icons";

export const Accordion = ({title,content}) => {
    const [isActive, setIsActive] = useState(false);
    const [click, setClick] = useState(isActive);

    return (
        <div className={styles["accordion"]}>
            <FontAwesomeIcon icon={isActive ? faChevronDown : faChevronRight } className={styles.chevron} onClick={() => setIsActive(!isActive)}></FontAwesomeIcon>
            <div className={styles["accordion-item"]} onClick={() => setIsActive(!isActive)} >
                <h5>{title}</h5>
                {isActive && <div className={styles["accordion-content"]}>{content}</div>}
            </div>
        </div>
    )
}

export default Accordion;