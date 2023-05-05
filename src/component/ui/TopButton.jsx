import React, {useState, useEffect} from "react";
import styles from './TopButton.module.css';

function TopButton() {

  const [showButton, setShowButton] = useState(false); // 기본값 비활성화

  const scrollToTop = () => {
      window.scroll({
          top: 0,
          behavior: 'smooth'
      })

  }
  useEffect(() => {
      const handleShowButton = () => {
          if (window.scrollY > 120) { //헤더 높이에 맞춰서 120 설정 
              setShowButton(true)
          } else {
              setShowButton(false)
          }
      }

      window.addEventListener("scroll", handleShowButton)
      return () => {
          window.removeEventListener("scroll", handleShowButton)
      }
  }, [])

  return showButton && (
      <div className={styles.scroll__container}>
          <button id={styles.top} onClick={scrollToTop} type="button" > Top</button>
      </div>

  )
}



export default TopButton