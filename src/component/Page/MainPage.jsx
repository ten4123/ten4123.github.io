import React, {useState, useEffect} from "react";
import PostList from '../List/PostList';
import Button from '../ui/Button';
import Header from '../ui/Header';
import TopButton from "../ui/TopButton";
// import data from '../../data.json'
import Styles from './Page.module.css';
import { useNavigate } from "react-router-dom";
import {db} from "../../firebase"

function MainPage(props) {
  const [data, setData] = useState([]) // ====> 데이터가 바뀌면 다시 렌더링
  
  useEffect(function(){ //1.최우선 실행
    let tempData = []
    db.collection('post').get().then(function(qs){
      qs.forEach(function(doc){
        tempData.push(doc.data())
      }) 
      setData(tempData); //2 데이터 바뀜
    })
  }, [])
  
  const nav = useNavigate();


  



  return (
    <div>
      <Header/>
      <div className={Styles.Page_Wrapper}>
            <div className={Styles.Page_Container}>

          <PostList posts={data}
                    onClickItem={function(id){
                      console.log(id + ' 페이지로 이동')
                      
                    }}/>
            </div>
        </div>
        <TopButton />
    </div>
   
  )
}



export default MainPage