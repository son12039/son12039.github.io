import React, { useEffect, useState } from "react";
import "../scss/Home.scss";
import Dev from "../assets/Dev.png";
import JS from "../assets/JS.png";
import Java from "../assets/Java.png";
const Home = () => {
  const [text, setText] = useState("");

  const message = "F ull-stack Developer";

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
      <div className="home">
        <div className="home-content">
          <div className="left">
            <div>방문해주셔서 감사합니다!</div>
            <div>
              저는 <span className="name">손정배</span>입니다
            </div>
            <div className="write">{text}</div>
          </div>
          <div className="right">
            <img src={Dev} className="Dev" alt="Dev" />
          </div>
        </div>
        <div className="skills">
          <div className="title">professional Skillset</div>
          <div className="content">
            <img src={Java} className="Java" alt="Java" />
            <img src={JS} className="JS" alt="JS" />

            {/* <div className="left">왼</div>
            <div className="right">오</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
