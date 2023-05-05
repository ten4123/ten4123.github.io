import React from "react";
import styles from "./List.module.css"
import CommentItem from './CommentItem'

function CommentList(props){
  const list = props.comments.map(function(comment){
    return (
      <CommentItem key={comment.id} content={comment.content}  date = {comment.date} /> 
    )
  })

  return (
    <div className={styles.CommentList_Wrapper}>{list}</div>
  )
}


export default CommentList