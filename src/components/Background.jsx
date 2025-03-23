import { useState, useEffect, useMemo, useCallback } from "react";
import "../scss/BackgroundGlow.scss";
import { v4 as uu } from "uuid";

const Background = () => {
  const [lights, setLights] = useState([]);

  // 랜덤 위치 생성 함수
  const getRandomPosition = () => {
    const randomX = Math.random() * 100; // 0% ~ 100% 범위
    const randomY = Math.random() * 100; // 0% ~ 100% 범위
    return { top: randomY, left: randomX };
  };

  // 랜덤 별빛 정보 생성 함수
  const addLight = useCallback(() => {
    const { top, left } = getRandomPosition();
    return {
      id: uu(),
      top,
      left,
      size: Math.random() * 2 + 1, // 크기 (1px ~ 3px)
      opacity: Math.random() * 0.5 + 0.3, // 불투명도 (0.3 ~ 0.8)
      animationDuration: `${Math.random() * 2 + 3}s`, // 애니메이션 지속 시간
    };
  }, []);

  // 화면에 보이는 별빛만 렌더링하도록 IntersectionObserver를 사용
  const createLights = useMemo(() => {
    const lightsArray = [];
    for (let i = 0; i < 100; i++) {
      lightsArray.push(addLight());
    }
    return lightsArray;
  }, [addLight]);

  useEffect(() => {
    setLights(createLights);
  }, [createLights]);

  return (
    <div className="back">
      {lights.map((light) => (
        <div
          key={light.id}
          className="lights"
          style={{
            position: "fixed",
            top: `${light.top}vh`,
            left: `${light.left}vw`,
            backgroundColor: "white",
            width: `${light.size}px`,
            height: `${light.size}px`,
            borderRadius: "50%",
            opacity: light.opacity,
            animation: `flicker ${light.animationDuration} infinite ease-in-out`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Background;
