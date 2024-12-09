import React, { useState } from "react";
import "../styles/MobileNavBar.css";
import porscheLogo from "../assets/svgs/porsche_logo.svg";
import MenuIcon from "../assets/svgs/MenuIcon.svg";
import closeIcon from "../assets/svgs/closeIcon.svg";
import { AnimatePresence, motion } from "framer-motion";

const fadeIn = {
  initial: {
    y: -100,
    x: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="center">
        <div className="mobileNavBar">
          <div className="theLogo">
            <img src={porscheLogo} alt="porsche logo" />
          </div>

          {!isOpen && (
            <div className="menuIcon">
              <img
                src={MenuIcon}
                alt="menu icon"
                onClick={() => {
                  setIsOpen(true);
                }}
              />
            </div>
          )}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit={{ y: -300, opacity: 0, x: -50 }}
                className="theOutterCover"
              >
                <div className="theMenu">
                  <div className="closeIcon">
                    <img
                      src={closeIcon}
                      alt="Close Icon"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    />
                  </div>
                  <nav className="links">
                    <li>HOME</li>
                    <li>FAQs</li>
                    <li>PORSCHE</li>
                    <li>FIND STORE</li>
                    <li>CONTACT US</li>
                  </nav>
                  <div className="accountRelatedBtn">
                    <button className="signUpBtn">SIGNUP</button>
                    <button className="logInBtn">LOGIN</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default MobileNavBar;
