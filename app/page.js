"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import HomeContent from "./HomeContent";
import PageBorder from "./PageBorder";

// const getDims = () => {
//   return { width: window.screen.width, height: window.screen.height };
// };

export default function Home() {
  const [stars, setStars] = useState([{}]);
  // const [dims, setDims] = useState(getDims());

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      const size = Math.floor(Math.random() * 10);
      const posX = Math.floor(Math.random() * 1000);
      const posY = Math.floor(Math.random() * 500);

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStars([...stars, { size, posX, posY }]);
    }
  }, []);

  return (
    <>
      <div className="w-full h-full">
        {stars.map((element, idx) => {
          return (
            <div
              key={idx}
              className={`bg-white border-[${element.size}px] w-1 rounded-full absolute left-[${element.posX}px] top-[${element.posY}]`}
            >
              sh
            </div>
          );
        })}
      </div>
      <PageBorder>
        <Header />
        <HomeContent />
      </PageBorder>
    </>
  );
}
