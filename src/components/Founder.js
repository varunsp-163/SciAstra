import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Mentor.css";
// import "./Founder.css";
import "./FounderNew.css";
import img1 from "../assets/asset 1.webp";
import img2 from "../assets/asset 2.webp";
import img3 from "../assets/asset 3.webp";
const Founder = () => {
  return (
    <>
      <div className="d-flex">
        <div className="person-container">
          <div className="img">
            <img className="fimg" src={img1} alt="Vivek Dwivedi" />
          </div>
          <div className="name_cnt" id="inner1">
            Vivek Dwivedi{" "}
          </div>

          <div className="name_desi" id="inner1">
            Founder SciAstra, Mentor, Qualified NEST, JEE advanced, Mains,
            Master's Student at NISER{" "}
          </div>
          <br />
          <div className="name_btn" id="inner1">
            <a
              className="button text-decoration-none"
              href="mailto:support@sciastra.com"
            >
              <span>
                Message him now <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </a>
          </div>
        </div>
        <div className="person-container">
          <div className="img">
            <img className="fimg" src={img2} />
          </div>
          <div className="name_cnt" id="inner1">
            Akhil Tripathi{" "}
          </div>
          <div className="name_desi" id="inner1">
            Cofounder SciAstra, Mentor, Qualified NEST, Master's Student at
            NISER{" "}
          </div>
          <br />

          <div className="name_btn" id="inner1">
            <a
              className="button text-decoration-none"
              href="mailto:support@sciastra.com"
            >
              <span>
                Message him now <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="body">
        <div class="mentor glassy-container">
          <div class="card">
            <div class="igmdata">
              <img src={img3} />
            </div>
            <h2 class="name_cnt1">Mentor & Advisor</h2>
            <p class="name_desi1">
              Principal Project Scientist at Indian Institute of Technology,
              Madras
            </p>
          </div>
        </div>
      </div> */}
      <div class="mentor">
        <div class="igmdata">
          <img src={img3} />
        </div>
        <div class="contentdata">
          <h2 class="name_cnt1">Mentor & Advisor</h2>
          <p class="name_desi1">
            Principal Project Scientist at Indian Institute of Technology,
            Madras
          </p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
