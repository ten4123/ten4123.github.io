import React from "react";
import PostItem from "./PostItem";
import styles from './List.module.css'
import { useNavigate } from "react-router-dom";



function PostList(props){
  const nav = useNavigate();

    const list = props.posts.map(function(post){
    
      return (
        <PostItem key = {post.id}
        title = {post.title}
        content = {post.content}
        date = {post.date}
        onClick={function(){
          // console.log(post.id + '로 이동')
          nav('/post/' + post.id)
        }}/>
      )

    })

  return(
    <div className={styles.PostList_Wrapper}>{list}</div>
  )

}
  


export default PostList