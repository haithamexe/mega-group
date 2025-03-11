import "../styles/ourWork.css";
import ImageShapesContainer from "../components/ImageShapesContainer";

function OurWork() {
  return (
    <div className="our-work">
      <header className="services-header-wrapper">
        <div className="services-header">
          <div className="header-hero-text">
            <h1>Our Work</h1>
            <p>
              We have worked with a variety of clients to create beautiful
              websites and branding. Take a look at some of our work below.
            </p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer />
          </div>
        </div>
      </header>
      <section className="services-content"></section>
    </div>
  );
}

export default OurWork;
