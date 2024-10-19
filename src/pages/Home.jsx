import image from "../assets/doctor.png";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h5>We Provide All Health Care Solution</h5>
            <h2>Protect Your Health and Take care of Your Health</h2>
            <button>
              <a href="#">Read More</a>
            </button>
            <span>+</span>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="header-box">
              <img src={image} alt="image" />
              <FontAwesomeIcon icon={faSquare} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
