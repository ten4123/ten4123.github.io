import React from "react";
import styles from './Logo.module.css';

function Logo(props){

  return(
    <div className={styles.Logo} onClick={props.onClick}>
      {props.title || "SHS'BLOG"}
    </div>
  )
}

export default Logo