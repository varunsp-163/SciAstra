import { useState } from "react";
import "./App.css";
import Mentors from "./components/Mentors";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTopButton from "./components/ScrollToTopButton";

const DUMMY_DETAILS = [
  {
    id: "u1",
    title: "Harvard University",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png",
  },
  {
    id: "u2",
    title: "Cambridge University",
    url: "https://yt3.googleusercontent.com/BXF7gZ7JmcIxY3S_IVofQmaW8KkMkZx_x0k84qDmvaGD13x235kB64n-VzNtUdgmEKKtCWf8=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "u3",
    title: "University of California",
    url: "https://upload.wikimedia.org/wikipedia/en/0/0e/University_of_California%2C_Irvine_seal.svg",
  },
  {
    id: "u4",
    title: "Eth Zurich University",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XrFcrdPLAPdENaojyKa7EJdlosxaKA15kOBX5CV8tzgum07t6_JPesuA32h4Q-n3Zec&usqp=CAU",
  },
];
const DUMMY_DETAILS_MORE1 = [
  {
    id: "u1",
    title: "Max Planck University",
    url: "https://www.hpcwire.com/wp-content/uploads/2023/02/Max-Planck.png",
  },
  {
    id: "u2",
    title: "University of Edinburgh",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/University_of_Edinburgh_ceremonial_roundel.svg/1200px-University_of_Edinburgh_ceremonial_roundel.svg.png",
  },
  {
    id: "u3",
    title: "Johns Hopkins University",
    url: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/74/7ae340ec6911e5b395490a2a565172/JHU-Logo-Square-Mini_180px.png?auto=format%2Ccompress&dpr=1&w=180&h=180",
  },
  {
    id: "u4",
    title: "Medigas State University",
    url: "data:image/png;base64,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",
  },
];
const DUMMY_DETAILS_MORE2 = [
  {
    id: "u1",
    title: "University of Illinois",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/University_of_Illinois_seal.svg/1200px-University_of_Illinois_seal.svg.png",
  },
  {
    id: "u2",
    title: "Humboldt University",
    url: "https://erudera.com/media/images/Huberlin-logo.svg.original.png",
  },
];

function App() {
  const [viewMore, setviewMore] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Initialize hovered index state
  const [hoveredIndex2, setHoveredIndex2] = useState(null); // Initialize hovered index state
  const [hoveredIndex3, setHoveredIndex3] = useState(null); // Initialize hovered index state

  const viewMoreHandler = () => {
    setviewMore(!viewMore);
  };
  const viewLessHandler = () => {
    setviewMore(!viewMore);
  };

  return (
    <>
      <div className="p-2">
        {/* <div className="team position-relative">
          <h1 className=" team-head py-2">Team Page</h1>
          <p className=" fs-4 font-semibold" id="font-semibold">
            Learn from scientists, research scholars from the top institutes in
            the world
          </p>
        </div> */}

        <div className="custom-team-container position-relative">
          <h1 className="custom-team-head py-2">Our Incredible Team</h1>
          <p
            className="custom-team-description team-desc fs-4 font-bold"
            id="font-semibold"
          >
            Explore the minds of scientists and research scholars from
            prestigious institutes around the globe
          </p>
        </div>

        <div className="d-flex mob-card justify-content-evenly gap-5 pb-4">
          {DUMMY_DETAILS.map((events, index) => {
            return (
              <div
                key={events.id}
                className="card d-flex flex-column justify-content-center align-items-center"
                style={{
                  cursor: "pointer",
                  width: "18rem",
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${events.url})`,
                  backgroundSize: hoveredIndex === index ? "160%" : "140%", // Zoom in when hovered
                  backgroundPosition: "center",
                  height: "400px",
                  transform: `rotate(${
                    hoveredIndex === index ? "-3" : "0"
                  }deg)`, // Apply tilt effect
                  transition:
                    "transform 0.3s ease-in-out, background-size 0.3s ease-in-out", // Transitions for smooth effects
                }}
                onMouseEnter={() => {
                  // Apply zoom and tilt effects on hover
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  // Remove zoom and tilt effects when not hovering
                  setHoveredIndex(null);
                }}
              >
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <p
                    className="card-text text-whiten text-center font-weight-bold"
                    style={{ fontSize: "2rem" }}
                  >
                    {events.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-2">
          {viewMore && (
            <>
              <div className="d-flex mob-card justify-content-evenly gap-5 pb-4">
                {DUMMY_DETAILS_MORE1.map((events, index) => {
                  return (
                    <div
                      key={events.id}
                      className="card d-flex flex-column justify-content-center align-items-center"
                      style={{
                        cursor: "pointer",
                        width: "18rem",
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${events.url})`,
                        backgroundSize:
                          hoveredIndex2 === index ? "160%" : "140%", // Zoom in when hovered
                        backgroundPosition: "center",
                        height: "400px",
                        transform: `rotate(${
                          hoveredIndex2 === index ? "-3" : "0"
                        }deg)`, // Apply tilt effect
                        transition:
                          "transform 0.3s ease-in-out, background-size 0.3s ease-in-out", // Transitions for smooth effects
                      }}
                      onMouseEnter={() => {
                        // Apply tilt effect on hover
                        setHoveredIndex2(index);
                      }}
                      onMouseLeave={() => {
                        // Remove tilt effect when not hovering
                        setHoveredIndex2(null);
                      }}
                    >
                      <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <p
                          className="card-text text-whiten text-center font-weight-bold"
                          style={{ fontSize: "2rem" }}
                        >
                          {events.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex mob-card gap-5 pb-4">
                {DUMMY_DETAILS_MORE2.map((events, index) => {
                  return (
                    <div
                      key={events.id}
                      className="card d-flex flex-column justify-content-center align-items-center"
                      style={{
                        cursor: "pointer",
                        width: "18rem",
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${events.url})`,
                        backgroundSize:
                          hoveredIndex3 === index ? "160%" : "140%", // Zoom in when hovered
                        backgroundPosition: "center",
                        height: "400px",
                        transform: `rotate(${
                          hoveredIndex3 === index ? "-3" : "0"
                        }deg)`, // Apply tilt effect
                        transition:
                          "transform 0.3s ease-in-out, background-size 0.3s ease-in-out", // Transitions for smooth effects
                      }}
                      onMouseEnter={() => {
                        // Apply tilt effect on hover
                        setHoveredIndex3(index);
                      }}
                      onMouseLeave={() => {
                        // Remove tilt effect when not hovering
                        setHoveredIndex3(null);
                      }}
                    >
                      <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <p
                          className="card-text text-whiten text-center font-weight-bold"
                          style={{ fontSize: "2rem" }}
                        >
                          {events.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {!viewMore && (
          <a className="text-decoration-none view" onClick={viewMoreHandler}>
            View more...
          </a>
        )}
        {viewMore && (
          <div className="view-more-content view ">
            <p className="p-2 text-center rounded">Many More....</p>
            <a className="text-decoration-none" onClick={viewLessHandler}>
              View less...
            </a>
          </div>
        )}
      </div>
      <Mentors />
      <ScrollToTopButton />
    </>
  );
}

export default App;
