import Banner from "../Components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faHeart,
  faMap,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <Banner title="Contact" smtitle="contact" />
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <form>
                <h1>Contact Us</h1> <br />
                <div className="form-control">
                  <input placeholder="Enter name" />
                </div>
                <div className="form-control">
                  <input placeholder="Enter email" />
                </div>
                <div className="form-control">
                  <input placeholder="Enter Phone Number" />
                </div>
                <div className="form-control">
                  <select>
                    <option>Select Department</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </div>
                <div>
                  <div className="form-control">
                    <textarea placeholder="Type Messsage"></textarea>
                  </div>
                </div>
                <button>Submit</button>
              </form>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="side">
                <div className="overlay">
                  <h3> Contact us Any Infomation</h3>
                  <li>
                    <FontAwesomeIcon icon={faMap} />
                    Location
                  </li>
                  <hr />
                  <p>2005, Strokes Isle Apt, Venavile 10010, USA</p>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} /> Email & Phone Number
                    <hr />
                    <p>developer1@gmail.com</p>
                    <p>+91 6380665692</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faGlobe} /> Follow Us
                  </li>
                  <hr />
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faHeart} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faGlobe} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faMobile} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
