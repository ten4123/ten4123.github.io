import React, {useState} from "react";
import Button from '../ui/Button';
import TextInput from "../ui/TextInput";
import styles from './Page.module.css'
import { useNavigate } from "react-router-dom";
import {db} from '../../firebase'
import Header from '../ui/Header';



function PostWritePage(props) {
  const nav = useNavigate();

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <div>
        <Header />
        <div className={styles.Page_Wrapper}>
        <div className={styles.Page_Container}>
        <TextInput height={60}
                  value = {title}
                  onChange = {function(e){ setTitle(e.target.value)}}
                  placeHolder = {"제목을 입력하세요."}
                  />
        <TextInput height={480}
                  value = {content}
                  onChange = {function(e){ setContent(e.target.value)}}
                  placeHolder = {"내용을 입력하세요."}/>
        <Button title="글 작성하기"
      
              onClick={function(){
                let timestamp = new Date().getTime().toString();
                let writeDate = new Date().toDateString();
                let writeTime = new Date().toLocaleString();
                db.collection('post').doc(timestamp).set({
                  id: timestamp,
                  title: title,
                  content: content,
                  comments: [],
                  date: writeDate,
                  time: writeTime
                }).then(function(){
                  nav('/main')
                })
              }}  disabled={!title || !content} // 타이틀과 컨텐트 둘 다 작성하지않으면 버튼 비활성화
              />
        </div>
      </div>
    </div>
   
   
  )
}

export default PostWritePage