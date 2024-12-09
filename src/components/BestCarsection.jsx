import "../styles/BestCarsection.css";
import Porsche_style from "../assets/images/Porsche_Style.png";
import Porsche_speed from "../assets/images/Porsche_speed.png";
import { delay, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const slideDown = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      mass: 0.4,
      ease: "easeIn",
    },
  },
};

const slideRight = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.8,
      duration: 1.5,
      delay: 0.5,
      ease: "easeIn",
    },
  },
};

const slideLeft = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.8,
      duration: 1.5,
      delay: 0.5,
      ease: "easeIn",
    },
  },
};
function BestCarsection() {
  const { ref: h2Ref, inView: h2InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: img1Ref, inView: img1InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: img2Ref, inView: img2InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <div className="center">
        <div className="BestCarsection">
          <div className="BestCarTittle">
            <motion.h2
              variants={slideDown}
              ref={h2Ref}
              initial="initial"
              animate={h2InView ? "animate" : "initial"}
            >
              ONE OF THE BEST SPORT CARS EVER BUILT
            </motion.h2>
          </div>
          <div className="imgs">
            <motion.div
              variants={slideRight}
              ref={img1Ref}
              initial="initial"
              animate={img1InView ? "animate" : "initial"}
              className="img1"
            >
              <p>Style</p>
              <img src={Porsche_style} alt="Image of a blue porsche 911" />
            </motion.div>
            <motion.p className="and">&</motion.p>
            <motion.div
              variants={slideLeft}
              ref={img2Ref}
              initial="initial"
              animate={img2InView ? "animate" : "initial"}
              className="img2"
            >
              <p>Speed</p>
              <img
                src={Porsche_speed}
                alt="image of a orange porsche 911 speeding on a wet road"
              />
            </motion.div>
          </div>
          <div className="exit">
            <h5>
              The Porsche 911 is an iconic two-door, 2+2 high-performance sports
              car introduced by Porsche AG in September 1964
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestCarsection;
