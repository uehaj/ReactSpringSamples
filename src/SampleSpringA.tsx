import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const SampleSpringA = () => {
  // (A)
  const [enter, setEnter] = useState(false);
  const spring = useSpring({
    fontSize: enter ? "48pt" : "24pt",
    color: enter ? "red" : "green"
  });
  return (
    <animated.div
      style={spring}
      onMouseEnter={e => setEnter(true)}
      onMouseLeave={e => setEnter(false)}
    >
      Hello React Spring
    </animated.div>
  );
};

export default SampleSpringA;
