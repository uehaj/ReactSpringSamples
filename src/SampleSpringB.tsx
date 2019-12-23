import React from "react";
import { useSpring, animated } from "react-spring";

const SampleSpringB = () => {
  // (B)
  const [spring, set] = useSpring(() => ({
    fontSize: "24pt",
    color: "green"
  }));
  return (
    <animated.div
      style={spring}
      onMouseEnter={e => set({ fontSize: "48pt", color: "red" })}
      onMouseLeave={e => set({ fontSize: "24pt", color: "green" })}
    >
      Hello React Spring
    </animated.div>
  );
};

export default SampleSpringB;
