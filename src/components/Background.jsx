import { useState, useEffect } from "react";
import "../scss/BackgroundGlow.scss";
import { v4 as uu } from "uuid";

const Background = () => {
  // 상태로 div들을 배열로 관리
  const [lights, setLights] = useState([]);

  // 랜덤 위치를 계산하는 함수
  const getRandomPosition = () => {
    const randomX = Math.floor(Math.random() * 100); // 0~100 범위의 랜덤 X 좌표 (화면 크기 비례 X)
    const randomY = Math.floor(Math.random() * 100); // 0~100 범위의 랜덤 Y 좌표 (화면 크기 비례 Y)
    return { top: randomY, left: randomX };
  };

  // 여러 개의 div를 랜덤 위치에 추가하는 함수
  const addLight = () => {
    const { top, left } = getRandomPosition(); // 랜덤 좌표 계산
    return { id: uu(), top, left }; // 고유한 id를 생성하여 div 정보 반환
  };

  // useEffect로 컴포넌트가 렌더링된 후 div 100개 추가
  useEffect(() => {
    const newLights = [];
    for (let i = 0; i < 100; i++) {
      newLights.push(addLight()); // 새로운 div 정보 추가
    }
    setLights(newLights); // 한 번에 div들을 상태에 저장
  }, []);

  return (
    <>
      <div className="back">
        {/* 상태에 있는 div들을 화면에 렌더링 */}
        {lights.map((light) => (
          <div
            key={light.id} // 고유 id로 key 설정
            className="lights"
            style={{
              position: "fixed", // 화면 기준으로 고정
              top: `${light.top}vh`, // 화면 크기 비례하여 고정
              left: `${light.left}vw`, // 화면 크기 비례하여 고정
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

export default Background;
