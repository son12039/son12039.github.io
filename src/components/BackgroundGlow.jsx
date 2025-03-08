import { useState, useEffect } from "react";
import "../scss/BackgroundGlow.scss";

const BackgroundAnimation = () => {
  // 상태로 div들을 배열로 관리
  const [divs, setDivs] = useState([]);

  // 랜덤 위치를 계산하는 함수
  const getRandomPosition = () => {
    const maxX = window.innerWidth - 100; // 화면의 가로 크기
    const maxY = window.innerHeight - 100; // 화면의 세로 크기
    const randomX = Math.floor(Math.random() * maxX); // 랜덤 X 좌표
    const randomY = Math.floor(Math.random() * maxY); // 랜덤 Y 좌표
    return { top: randomY, left: randomX };
  };

  // 여러 개의 div를 랜덤 위치에 추가하는 함수
  const addDiv = () => {
    const { top, left } = getRandomPosition(); // 랜덤 좌표 계산
    return { id: Date.now() + Math.random(), top, left }; // 고유한 id를 생성하여 div 정보 반환
  };

  // useEffect로 컴포넌트가 렌더링된 후 div 100개 추가
  useEffect(() => {
    const newDivs = [];
    for (let i = 0; i < 100; i++) {
      newDivs.push(addDiv()); // 새로운 div 정보 추가
    }
    setDivs(newDivs); // 한 번에 div들을 상태에 저장
  }, []);

  return (
    <>
      <div className="back">
        <p>이건빽이야</p>
        {/* 상태에 있는 div들을 화면에 렌더링 */}
        {divs.map((div) => (
          <div
            key={div.id} // 고유 id로 key 설정
            className="new-div"
            style={{
              position: "absolute",
              top: `${div.top}px`,
              left: `${div.left}px`,
              backgroundColor: "white",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default BackgroundAnimation;
