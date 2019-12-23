import React, { useState } from "react";
import { useSprings, animated, config } from "react-spring";

const SampleSprings = () => {
  const msg = "Hello React Spring";
  const [springs, set] = useSprings(msg.length, () => ({
    config: config.wobbly,
    fontSize: "24pt"
  }));
  return (
    <div style={{ fontSize: "24pt" }}>
      {springs.map((item, idx) => (
        <animated.span
          onMouseEnter={e => set(i => (i === idx ? { fontSize: "48pt" } : {}))}
          onMouseLeave={e => set(i => (i === idx ? { fontSize: "24pt" } : {}))}
          style={{ verticalAlign: "top", ...item }}
        >
          {msg[idx]}
        </animated.span>
      ))}
    </div>
  );
};

export default SampleSprings;
