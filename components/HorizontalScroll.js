"use client";
import React, { useRef } from "react";

const HorizontalScroll = ({ children, ...props }) => {
  const scrollRef = useRef(null);

  const handleWheel = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div {...props} ref={scrollRef} onWheel={handleWheel}>
      {children}
    </div>
  );
};

export default HorizontalScroll;
