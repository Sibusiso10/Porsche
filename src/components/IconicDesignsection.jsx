import "../styles/IconicDesignsection.css";
import Old911 from "../assets/images/Old911.png";
import Newer911 from "../assets/images/Newer911.png";
import Porsche911Icon from "../assets/svgs/Porsche911Icon.svg";
import { useInView } from "react-intersection-observer";
import { delay, motion } from "framer-motion";

const slideOut = {
  initial: {
    x: -100,
    opacity: 1,
  },
  animate: {
    x: "-100vw",
    opacity: 0,
    width: 250,
    transition: {
      type: "tween",
      mass: 0.8,
      duration: 1.2,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

const slideDown = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.4,
      delay: 0.6,
      ease: "easeIn",
    },
  },
};

const slideUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.4,
      delay: 0.6,
      ease: "easeIn",
    },
  },
};

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      delay: 1,
      ease: "easeIn",
    },
  },
};
function IconicDesignsection() {
  const { ref: svgRef, inView: svgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: img1Ref, inView: img1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: img2Ref, inView: img2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="center">
      <div className="IconicSection">
        <div className="SvgPorsche">
          <motion.img
            variants={slideOut}
            initial="initial"
            ref={svgRef}
            animate={svgInView ? "animate" : "initial"}
            src={Porsche911Icon}
            alt="Black icon of a porsche 911"
          />
        </div>
        <div className="IconicContainer">
          <div className="containingTheImages">
            <div className="Newer">
              <motion.img
                variants={slideDown}
                ref={img1Ref}
                initial="initial"
                animate={img1InView ? "animate" : "initial"}
                src={Newer911}
                alt="Orange Porsche 911 2023 model "
              />
            </div>
            <div className="Older">
              <motion.img
                variants={slideUp}
                ref={img2Ref}
                initial="initial"
                animate={img2InView ? "animate" : "initial"}
                src={Old911}
                alt="Grey Porsche 911 older model "
              />
            </div>
          </div>
          <motion.div
            variants={fadeIn}
            ref={contentRef}
            initial="initial"
            animate={contentInView ? "animate" : "initial"}
            className="IconicContent"
          >
            <ul>
              <li>
                Timeless Silhouette: The Porsche 911 boasts an instantly
                recognizable silhouette with its sloping roofline, curvaceous
                fenders, and iconic round headlights.
              </li>
              <li>
                Rear-Engine Layout: Its rear-engine placement contributes to
                balanced weight distribution and sharp handling.
              </li>
              <li>
                Evolutionary Continuity: Despite decades of evolution, the 911’s
                design remains true to its heritage, making it a symbol of
                automotive excellence
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default IconicDesignsection;
