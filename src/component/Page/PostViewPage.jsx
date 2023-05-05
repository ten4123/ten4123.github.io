import React, { useState, useEffect } from "react";
import Button from '../ui/Button';
import TextInput from "../ui/TextInput";
import CommentList from "../List/CommentList";
import {db} from '../../firebase'
import Styles from './Page.module.css';
import { useNavigate, useParams } from "react-router-dom";
import Header from '../ui/Header';
import TopButton from "../ui/TopButton";


function PostViewPage(props) {
  const nav = useNavigate();
  const postId = useParams().id

  const [commentCount, setCommentCount] = useState('');
  const [comment, setComment] = useState('')
  const [post, setPost] = useState({
    id: 0,
    title: '',
    content: '',
    comments: [],
  })

  const [refreshComments, setRefreshComments] = useState(false); // 변수 추가

  useEffect(function(){
    db.collection('post').doc(postId).get().then(function(doc){
      const postData = doc.data();
      setPost(postData);
      setCommentCount(postData.comments.length);
    })
  }, [refreshComments]); // listen for changes to refreshComments

  return (
    <div>
      <Header />
      <div className={Styles.Page_Wrapper}>
        <div className={Styles.Page_Container}>
          <div className={Styles.Post_Container}>
            <div className={Styles.Title_Text}>{post.title}
                <div className={Styles.Title_time}> 
                  {post.time} 
                </div> 
            </div>
            <p className={Styles.Content_Text}>{post.content}</p>
          </div>
          <div className={Styles.Comment_Label}>댓글 ({commentCount}) </div> 
          <CommentList comments={post.comments} refreshComments={refreshComments} /> {/* pass prop */}
          <TextInput value={comment} onChange={function(e){setComment(e.target.value)}}
                     height={120}
                     placeHolder={"내용을 입력하세요."}/>
          <Button title="댓글쓰기" onClick={function(){
                let timestamp = new Date().getTime().toString();
                let writeDate = new Date().toLocaleString();
                let tempComments = post.comments
                tempComments.push({
                  id: (postId + '_' + timestamp),
                  content: comment,
                  date: writeDate
                })
                db.collection('post').doc(postId).update({
                  comments : tempComments
                }).then(function(){
                  setComment(""); // TextInput 안의 내용을 초기화
                  setRefreshComments(!refreshComments); // update state variable
                })}}disabled={!comment}/>
        </div>
      </div>
      <TopButton />
    </div>
  )
}

export default PostViewPage
