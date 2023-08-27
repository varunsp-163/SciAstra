import App from "./newSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Mentor.css";
import img1 from "../assets/asset 1.webp";
import img2 from "../assets/asset 2.webp";
import Founder from "./Founder";

const slides1 = [
  {
    id: "p1",
    img: "http://sciastra.com/new_admin//teams/files/Kedar_Tornekar1.jpg",
    name: "Mandar Tornekar",
    uni: "GMC Dhule",
  },
  {
    id: "p2",
    img: "http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg",
    name: "Sehasree Mohanta",
    uni: "IACS",
  },
  {
    id: "p3",
    img: "http://sciastra.com/new_admin//teams/files/Piyush_Verma_biology.jpg",
    name: "Piyush Verma",
    uni: "IISER Pune",
  },
  {
    id: "p4",
    img: "http://sciastra.com/new_admin//teams/files/Aditya Nayak_Biology.jpeg",
    name: "Aditya Nayak",
    uni: "IISER Mohali",
  },
  {
    id: "p5",
    img: "http://sciastra.com/new_admin//teams/files/TIASHA_DAS_Biology.jpg",
    name: "Tiasha Das ",
    uni: "IISER Berhampur ",
  },
];
const slides2 = [
  {
    id: "p1",
    img: "http://sciastra.com/new_admin//teams/files/Siddharth_Bhatt_physics.jpg",
    name: "Siddhart Bhatt",
    uni: "IISER Thiruvananthapuram",
  },
  {
    id: "p2",
    img: "http://sciastra.com/new_admin//teams/files/Ripunjay.JPG",
    name: "Ripunjay Dwivedi",
    uni: "CMI",
  },
  {
    id: "p3",
    img: "http://sciastra.com/new_admin//teams/files/Screenshot(49).png",
    name: "Tanmay",
    uni: "NISER",
  },
  {
    id: "p4",
    img: "http://sciastra.com/new_admin//teams/files/Sagar_Rathore_physics.jpg",
    name: "Sagar Rathore",
    uni: "IISER Berhampur",
  },
  {
    id: "p5",
    img: "http://sciastra.com/new_admin//teams/files/Abhay_Gupta_physics.jpg",
    name: "Abhay Gupta",
    uni: "IIT Bombay",
  },
];
const slides3 = [
  {
    id: "p1",
    img: "http://sciastra.com/new_admin//teams/files/Saumya_Sharma_mathematics.png",
    name: "Saumya Prakash",
    uni: "NISER",
  },
  {
    id: "p2",
    img: "http://sciastra.com/new_admin//teams/files/Saumya_Shisodiya_mathematics.jpg",
    name: "Saumya Shisodiya",
    uni: "HBTU Kanpur",
  },
  {
    id: "p3",
    img: "http://sciastra.com/new_admin//teams/files/Veena_Sri_mathematics.jpg",
    name: "Veena Sri",
    uni: "IISER TVM",
  },
  {
    id: "p4",
    img: "http://sciastra.com/new_admin//teams/files/Adityarup_Laha_mathematics.jpg",
    name: "Adityarup Laha",
    uni: "ISI, Kolkata",
  },
  {
    id: "p5",
    img: "http://sciastra.com/new_admin//teams/files/Md_Akhtar_mathematics.jpg",
    name: "MD JAVED AKHTAR",
    uni: "IISER,KOLKATA",
  },
];
const slides4 = [
  {
    id: "p1",
    img: "http://sciastra.com/new_admin//teams/files/Parth_Singh.jpg",
    name: "Parth Kumar Singh",
    uni: "IIT,Jodhpur",
  },
  {
    id: "p2",
    img: "http://sciastra.com/new_admin//teams/files/Mandar_Tornekar_chemistry.jpg",
    name: "Mandar Tornekar",
    uni: "GMC Dhule",
  },
  {
    id: "p3",
    img: "http://sciastra.com/new_admin//teams/files/Vivek.jpg",
    name: "Vivek Dwivedi",
    uni: "NISER",
  },
  {
    id: "p4",
    img: "http://sciastra.com/new_admin//teams/files/SHRUTI_GUPTA_chemistry.jpg",
    name: "Shruti",
    uni: "CEBS,Mumbai",
  },
  {
    id: "p5",
    img: "http://sciastra.com/new_admin//teams/files/Anshuman_Patra_chemistry.jpg",
    name: "Anshuman Patra",
    uni: "IISER, Berhampur",
  },
];

const Mentors = () => {
  return (
    <div>
      <h1 className="text-center p-5 mentor-heading">
        <span className="mentor-prefix">Our Awesome Team </span>
        <span className="curly-braces">{"{"}</span> Meet Your Mentors{" "}
        <span className="curly-braces">{"}"}</span>
      </h1>

      

      {/* <Slider /> */}
      <div>
        <h1 className="subject" style={{ color: "#234eb0" }}>
          Biology
        </h1>
        <App slides={slides1} />
      </div>

      <div>
        <h1 className="subject" style={{ color: "#234eb0" }}>
          Physics
        </h1>
        <App slides={slides2} />
      </div>

      <div>
        <h1 className="subject" style={{ color: "#234eb0" }}>
          Mathematics
        </h1>
        <App slides={slides3} />
      </div>

      <div>
        <h1 className="subject" style={{ color: "#234eb0" }}>
          Chemistry
        </h1>
        <App slides={slides4} />
      </div>

      {/* <h1 className="text-center p-5" style={{ fontSize: "35px", color: "#354364" }}>Mentor and Advisor</h1> */}

      <h1 className="text-center p-5 mentor-heading">
        <span className="mentor-prefix">Our Team's Mentor &amp;</span> Fully
        dedicated advisor for future scientist
      </h1>

      <Founder />
    </div>
  );
};

export default Mentors;
