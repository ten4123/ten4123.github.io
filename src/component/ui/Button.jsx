import React from "react";
import styles from './Button.module.css';

function Button(props){

  const buttonClass = props.disabled ? styles['Button-disabled'] : '';

  return(
    <button className= {`${styles.Button} ${buttonClass}`}  onClick={props.onClick}>
      {props.title || "버튼"}
    </button>
  )
}

export default Button