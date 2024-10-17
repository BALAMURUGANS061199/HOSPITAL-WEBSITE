import footerlogo from "../../assets/footerlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img src={footerlogo} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="footer-class">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="footer-text">
                <h6>Contact Us</h6>
                <h2>+91 6380665692</h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Blogs</a>
                <a href="">Bookings</a>
                <a href="">Faq's</a>
                <a href="">Our Terms</a>
                <a href="">Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Our Services</h2>
            <ul>
              <li>
                <a href="">Dental Care</a>
                <a href="">Cardiac Clinic</a>
                <a href="">Massage therapy</a>
                <a href="">Cardiology</a>
                <a href="">Precious Diagonsis</a>
                <a href="">Ambulance Services</a>
                <a href="">Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Subscribe</h2>
            <form>
              <input type="email" />
              <button type="submit">Subscribe Now</button>
            </form>
            <ul className="social">
              <li>
                <a href="#">
                  <img src="" />
                </a>
                <a href="#">
                  <img src="" />
                </a>
                <a href="#">
                  <img src="" />
                </a>
                <a href="#">
                  <img src="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
