import "../styles/Herosection.css";
import { motion } from "framer-motion";
import porscheImage from "../assets/images/Porsche_Aesthetic _ Porsche_911_GT2_RS.png";
import { useInView } from "react-intersection-observer";

const imgAnimation = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
      mass: 0.4,
      stiffness: 50,
      type: "spring",
      ease: "easeIn",
    },
  },
};

const headingAimation = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      mass: 0.2,
      stiffness: 50,
      ease: "easeIn",
    },
  },
};

const paragraphAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeIn",
    },
  },
};
function Herosection() {
  return (
    <div className="center">
      <div className="hereSection">
        <div className="img">
          <motion.img
            variants={imgAnimation}
            initial="initial"
            animate="animate"
            src={porscheImage}
            alt="Porsche_Aesthetic _ Porsche_911_GT2_RS"
          />
        </div>
        <div className="intro">
          <div className="tittle">
            <motion.h1
              variants={headingAimation}
              initial="initial"
              animate="animate"
            >
              The Porsche 911
            </motion.h1>
          </div>
          <div className="description">
            <motion.p
              variants={paragraphAnimation}
              initial="initial"
              animate="animate"
            >
              The 2023 Porsche 911 combines thrilling performance with everyday
              usability. Whether you’re carving corners or cruising on the
              highway, the 911 delivers an exhilarating driving experience. But
              when pushed it pushes a beast on wheels
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
