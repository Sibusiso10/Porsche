import "../styles/WhoItsfor.css";
import Black911 from "../assets/images/Black911.png";
import Grey911 from "../assets/images/Grey911.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
      delay: 0.4,
      ease: "easeIn",
    },
  },
};

function WhoItsfor() {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="center">
      <div className="backgroundColor">
        <div className="gridient"></div>
        <div className="darkIntro">
          <img
            src={Black911}
            alt="Image of a black Porsche 911 in a black background"
          />
        </div>
        <div className="whoItFor">
          <div className="image911">
            <img src={Grey911} alt="Grey Porsche 911 2023 model " />
          </div>
          <motion.div
            variants={fadeIn}
            ref={contentRef}
            initial="initial"
            animate={contentInView ? "animate" : "initial"}
            className="madeForContent"
          >
            <div className="whoItForContent">
              <h3>Who it’s made for: </h3>
              <p>
                The Porsche 911 is made for those who appreciate precision
                engineering, exhilarating performance, and a timeless design
                that transcends generations. Whether on the racetrack or winding
                roads, the 911 continues to captivate automotive enthusiasts
                worldwide.
              </p>
            </div>
            <div className="designAndHeritage">
              <h3>Design and Heritage:</h3>
              <ul className="thelist">
                <li>
                  The original Porsche 911 was designed by Ferdinand “Butzi”
                  Porsche, the son of the company’s founder,   Ferry Porsche. It
                  featured a distinctive rear-engined layout and a sleek,
                  timeless design.
                </li>
                <li>
                  Over the years, the 911 has undergone continuous enhancements,
                  but its fundamental concept has remained unchanged. It has
                  become an enduring symbol of performance, precision, and
                  driving pleasure.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhoItsfor;
