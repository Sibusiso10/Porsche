import "../styles/NavBar.css";
import porscheLogo from "../assets/svgs/porsche_logo.svg";

function NavBar() {
  return (
    <>
      <div className="center">
        <div className="navBar">
          <div className="logo">
            <img src={porscheLogo} alt="porsche logo" />
          </div>
          <nav className="links">
            <li>HOME</li>
            <li>FAQs</li>
            <li>PORSCHE</li>
            <li>FIND STORE</li>
            <li>CONTACT US</li>
          </nav>
          <div className="acountRelatedBtn">
            <button className="signUpBtn">SIGNUP</button>
            <button className="logInBtn">LOGIN</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
