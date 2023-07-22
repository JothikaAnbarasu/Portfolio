import React from "react";
import styled from "styled-components";
import aboutSvg from "../assets/about.svg";

function About() {
  return (
    <AboutContainer className="container">
      <div className="about-title title" id="about" data-aos="fade-right">
        About
      </div>

      <div className="about-content">
        <div className="about-description">
          <ul>
            <li>
              <p data-aos="fade-up">
                I'm a passionate front-end developer currently seeking job
                opportunities to apply my web development skills and contribute
                to impactful projects.
              </p>
            </li>
            <li>
              <p data-aos="fade-up">
                I thoroughly enjoy the process of building web applications that
                seamlessly blend functionality and aesthetics, empowering users
                with intuitive and efficient digital experiences.
              </p>
            </li>
            <li>
              <p data-aos="fade-up">
                Outside of coding, I find joy in expressing my creativity
                through painting and challenging my strategic thinking with a
                game of chess.
              </p>
            </li>
          </ul>
        </div>

        <div className="about-svg-wrapper" data-aos="fade-left">
          <img src={aboutSvg} alt="designer girl" className="about-svg" />
        </div>
      </div>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  margin-bottom: 8%;
  color: ${(props) => props.theme.text};
  .about-title {
    text-align: left;
  }
  .about-svg {
    height: 450px;
    width: 350px;
  }

  .about-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-description {
    width: 60%;
    padding: 4%;
    font-size: 1.5rem;
  }

  .about-description ul li p {
    margin-bottom: 5%;
    &::before {
      content: "⚡";
    }
  }

  .about-svg-wrapper {
    text-align: center;
    width: 30%;
  }

  .about-description,
  .about-svg-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1020px) {
    .about-svg {
      height: 350px;
      width: 250px;
    }
    .about-content {
      flex-direction: column;
    }
    .about-svg-wrapper {
      order: 1;
      width: 100%;
    }
    .about-description {
      order: 2;
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    .about-description {
      padding: 0;
    }
    margin-bottom: 12%;
  }
`;

export default About;
