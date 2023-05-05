import React from "react";
import styles from "./TextInput.module.css";

function TextInput(props) {
  return (
    <textarea className={styles.TextInput}
              style={{'--height' : props.height+'px'}}
              height={props.height}
              value={props.value} //요기 스펠링을 틀려서 안바뀐거였음
              onChange={props.onChange}
              placeHolder={props.placeHolder}>
    </textarea>
  )
}

export default TextInput;