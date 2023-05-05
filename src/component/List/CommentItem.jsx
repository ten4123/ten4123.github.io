import React from "react";
import styles from "./List.module.css"

function CommentItem(props){
  return (
    <div className={styles.Comment_Wrapper}>
      <div className={styles.Comment_Content}>
        {props.content}
      </div>
      <div className={styles.Post_Date}>{props.date}</div> 
         {/* 시간 가져오기 */}
    </div> 
  )
}


export default CommentItem