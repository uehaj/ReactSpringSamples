/*import React, { useRef } from "react";
import { useChain, animated } from "react-spring";
import SampleSpring from "./SampleSpring";
import SampleSprings from "./SampleSprings";
import SampleTrail from "./SampleTrail";

const SampleChain = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  useChain([ref1, ref2, ref3]);
  return (
    <div style={{ textAlign: "center", fontSize: "24pt" }}>
      <SampleSpring ref={ref1} />
      <SampleSpring ref={ref2} />
    </div>
  );
};

export default SampleChain;
*/

import React, { useState, useRef } from "react";
import { useSpring, useChain, animated, config } from "react-spring";

const SampleSpring = ({ ref }) => {
  const [enter, setEnter] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();

  const spring1 = useSpring({
    fontSize: enter ? "48pt" : "18pt",
    ref: ref1
  });
  const spring2 = useSpring({
    fontSize: enter ? "48pt" : "18pt",
    ref: ref2
  });
  //  useChain(flag ? [ref1, ref2] : [ref2, ref1]);
  useChain([ref1, ref2]);
  return (
    <div
      style={{ textAlign: "center" }}
      onMouseEnter={e => setEnter(p => !p)}
      onMouseLeave={e => setEnter(p => !p)}
    >
      <animated.div style={spring1}>Hello React Spring</animated.div>
      <animated.div style={spring2}>Hello React Spring</animated.div>
    </div>
  );
};

export default SampleSpring;
