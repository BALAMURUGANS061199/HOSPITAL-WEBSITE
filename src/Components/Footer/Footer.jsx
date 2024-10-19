import footerlogo from "../../assets/footerlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import fb from "../../assets/fb.png";
import insta from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img src={footerlogo} className="footerlogo" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </p>
            <div className="footer-contact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="footer-text">
                <h6>Contact Us</h6>
                <h4>+91 6380665692</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="">Home</a>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="">Bookings</a>
                </li>
                <li>
                  <a href="">Faqs</a>
                </li>
                <li>
                  <a href="">Our Terms</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Our Services</h2>
            <ul>
              <li>
                <a href="">Dental Care</a>
              </li>
              <li>
                <a href="">Cardiac Clinic</a>
              </li>
              <li>
                <a href="">Massage therapy</a>
              </li>
              <li>
                <a href="">Cardiology</a>
              </li>
              <li>
                <a href="">Precious Diagonsis</a>
              </li>
              <li>
                <a href="">Ambulance Services</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Subscribe</h2>
            <form>
              <input type="email" placeholder="Enter Email Address" />
              <button type="submit">Subscribe Now</button>
            </form>
            <ul className="social">
              <li>
                <a href="#">
                  <img src={fb} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={insta} />
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <img src={twitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <span>Copyright @2024 Design & Developed By BALAMURUGAN S</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
