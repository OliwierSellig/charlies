import { useSpring, animated } from "react-spring";

function AnimatedNumber({ n }) {
  console.log(parseFloat(n));
  const { number } = useSpring({
    from: { number: 0 },
    number: parseFloat(n),
    delay: 100,
    config: { mass: 1, tension: 25, friction: 10 },
  });

  const animatedNumber = String(n).includes(".")
    ? number.to((n) => n.toFixed(2))
    : number.to((n) => n.toFixed(0));

  const additionalSign = String(n.replace(String(parseFloat(n)), ""));

  return (
    <>
      <animated.div>{animatedNumber}</animated.div>
      <span>{additionalSign ? additionalSign : null}</span>
    </>
  );
}

export default AnimatedNumber;
