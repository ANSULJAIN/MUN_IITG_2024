import React, { useEffect, useRef } from 'react';

const XVIIAnimation = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const svg = circle.querySelector('svg');
    const text = svg.querySelector('text');

    // Animate the text
    text.classList.add('animate-text');

    // Clean up the animation when the component unmounts
    return () => {
      text.classList.remove('animate-text');
    };
  }, []);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="relative w-32 h-32">
        <div
          className="absolute top-0 left-0 w-full h-full bg-yellow-500 rounded-full"
          ref={circleRef}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <text
              x="50"
              y="60"
              textAnchor="middle"
              fill="white"
              fontSize="40"
              fontWeight="bold"
              className="animate-text"
            >
              XVII
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default XVIIAnimation;