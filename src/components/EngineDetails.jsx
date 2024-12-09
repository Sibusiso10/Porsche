import "../styles/EngineDetails.css";
import porsche911Engine from "../assets/images/Porsche 911 engine.png";
import Linebreak from "../assets/svgs/Line.svg";

function EngineDetails() {
  return (
    <>
      <div className="center">
        <div className="container">
          <div className="engineInformation">
            <span>
              <p>
                1. Engine Type: The Porsche 911 features a rear-mounted flat-six
                engine (also known as a boxer engine). This means that the
                engine cylinders are horizontally opposed, providing a low
                center of gravity and balanced weight distribution.
              </p>
            </span>
            <span>
              <p>2. Air-Cooled Era (1964–1998):</p>
              <span className="inList">
                <li>
                  Initially, the 911 engines were air-cooled until the
                  introduction of the 996 series in 1998.
                </li>

                <li>
                  Air-cooled engines have a distinctive sound and were a
                  hallmark of early 911 models.
                </li>
              </span>
            </span>
            <span>
              <p>3. Water-Cooled Era (1998–present):</p>
              <span className="inList">
                <li>
                  The 996 series marked a significant change, transitioning
                  to water-cooled engines.
                </li>
                <li>
                  Water-cooling improved engine efficiency, emissions, and
                  overall performance.
                </li>
                <li>
                  Subsequent 911 generations (997, 991, and 992) continued with
                  water-cooled engines.
                </li>
              </span>
            </span>
            <span>
              <p>4. Evolution and Success:</p>
              <span className="inList">
                <li>
                  Over the years, the Porsche 911 has undergone continuous
                  enhancements, but its fundamental concept remains unchanged.
                </li>
                <li>
                  The car has been extensively raced by private and factory
                  teams, achieving remarkable success.
                </li>
                <li>
                  Notably, the naturally aspirated 911 Carrera RSR won world
                  championship races, and the 911-derived 935 turbo triumphed at
                  the 24 Hours of Le Mans in 1979.
                </li>
              </span>
            </span>
            <span>
              <p>5. Legacy:</p>
              <span className="inList">
                <li>
                  In a 1999 poll to determine the Car of the Century, the
                  Porsche 911 ranked fifth.
                </li>
                <li>
                  It’s one of only two cars in the top five that remained
                  continuously in production (the other being the original
                  Beetle)
                </li>
              </span>
            </span>
          </div>
          <div className="Linebreak">
            <img src={Linebreak} alt="Black vertical line" />
          </div>
          <div className="engineImage">
            <img
              src={porsche911Engine}
              alt="rear-mounted flat-six engine for a Porscher 911"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EngineDetails;
