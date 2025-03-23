import React, { useEffect, useState } from "react";
import "../scss/Home.scss";
import Dev from "../assets/Dev.png";

const Home = () => {
  const [text, setText] = useState(""); // 현재 표시되는 텍스트를 관리

  const message = "웹,, 백엔드개발자"; // 타이핑될 문구

  useEffect(() => {
    let index = 0;
    const typingEffect = setInterval(() => {
      setText((prevText) => prevText + message[index]); // 하나씩 텍스트 추가
      index += 1;

      if (index === message.length - 1) {
        clearInterval(typingEffect); // 모든 문자가 타이핑되면 멈춤
      }
    }, 150); // 150ms 간격으로 하나씩 글자가 나타남

    return () => clearInterval(typingEffect); // 컴포넌트가 unmount되면 interval을 정리
  }, []);

  return (
    <>
      <div className="home-content">
        <div className="left">
          <div>방문해주셔서 감사합니다!</div>
          <div>
            저는 <span className="name">손정배</span>입니다
          </div>
          <div className="write">{text}</div> {/* 타이핑 효과 적용된 텍스트 */}
        </div>
        <div className="right">
          <img src={Dev} className="Dev" alt="Dev" />
        </div>
      </div>
    </>
  );
};

export default Home;
