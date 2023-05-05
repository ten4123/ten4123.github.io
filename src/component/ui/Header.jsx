import React, {useState, useEffect} from "react";
import styles from './Header.module.css';
import { useNavigate } from "react-router-dom";
import Button from '../ui/Button';
import Logo from '../ui/Logo';

function Header(props){

  const nav = useNavigate();

  return(
    <div className={styles.Header}>
          <Logo onClick={function(){
                  // 메인 페이지로 이동
                  nav("/main")}}
          />
           <Button title="글쓰기"
                onClick={function(){
                  // 글 작성 페이지로 이동
                  nav("/write")
                }}/>
    </div>
   
  )
}

export default Header;