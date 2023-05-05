import React, { useState, useEffect } from "react";
import styles from "./List.module.css";

function PostItem(props){

  const [time, setTime] = useState(new Date());

  return (
   <div className={styles.Post_Wrapper} onClick={props.onClick}>
    <div className={styles.Tumbnail_Img}></div>
    <div className={styles.Text}>
      <div className={styles.Title_Date}>
         <div className={styles.Post_Title}>{props.title}</div>
         <div className={styles.Post_Date}>{props.date}</div> 
         {/* 시간 가져오기 */}
      </div>
      <div className="Info">
      <div className={styles.Post_Content}>{props.content}</div>
      </div>
      <div className={styles.More}>
        더보기
      </div>
    </div>
   
   </div>

  )
}


export default PostItem