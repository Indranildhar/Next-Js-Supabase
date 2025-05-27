'use client'
import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDarkBackground, setIsDarkBackground] = useState(true);
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

    // Detect background color
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const bgType = entry.target.getAttribute('data-bg');
            setIsDarkBackground(bgType === 'dark');
          }
        }
      },
      {
        threshold: 0.5,
      }
    );

    document.querySelectorAll('[data-bg]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const cursorColor = isDarkBackground ? 'white' : 'black';

  return (
    // <div
    //   style={{
    //     position: 'fixed',
    //     top: position.y,
    //     left: position.x,
    //     width: '30px',
    //     height: '30px',
    //     border: '1px solid white',
    //     borderRadius: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     pointerEvents: 'none',
    //     zIndex: 9999,
    //   }}
    // >
    //   <div
    //     style={{
    //       width: '6px',
    //       height: '6px',
    //       backgroundColor: 'white',
    //       borderRadius: '50%',
    //       position: 'absolute',
    //       top: '50%',
    //       left: '50%',
    //       transform: 'translate(-50%, -50%)',
    //     }}
    //   />
    // </div>


<div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '30px',
        height: '30px',
        border: `1px solid ${cursorColor}`,
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference', // optional for contrast enhancement
      }}
    >
      <div
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: cursorColor,
          borderRadius: '50%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>

  );
}
