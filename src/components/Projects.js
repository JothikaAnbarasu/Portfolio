import React from "react";
import styled from "styled-components";
import mealmate from "../assets/meal-mate.jpg";
import comfysloth from "../assets/comfy-sloth.jpg";
import tictactoe from "../assets/tic-tac-toe.jpg";
import { ResumeBtn } from "./Hero";

function Projects() {
  return (
    <ProjectsContainer className="container">
      <div className="project-title title" id="projects" data-aos="fade-right">
        Projects
      </div>
      <div className="project-content">
        <Project>
          <div
            className="project-img-wrapper "
            data-aos="fade-right"
            data-aos-offset="2"
          >
            <img
              src={mealmate}
              alt="food delivery app"
              className="project-img"
            />
            <a
              href="https://github.com/JothikaAnbarasu/MealMate"
              target="_blank"
              rel="noreferrer"
            >
              <span className="github-text">View GitHub</span>
            </a>
          </div>
          <div
            className="project-details-wrapper"
            data-aos="fade-left"
            data-aos-offset="2"
          >
            <h3 className="project-details-title">MealMate</h3>
            <p className="project-details-subtitle">
              Fully Responsive <ProjectType> Food Delivery App</ProjectType>{" "}
              with restaurant filtering functionlity
            </p>
            <TeckStack>
              Tech stack :
              <ul>
                <li>html</li>
                <li>css</li>
                <li>reactjs</li>
                <li>javascript</li>
              </ul>
            </TeckStack>
            <a
              href="https://react-food-delivery-app-mealmate.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ResumeBtn className="visit-btn">View Live</ResumeBtn>
            </a>
          </div>
        </Project>

        <Project>
          <div
            className="project-img-wrapper comfy-sloth-img-wrapper"
            data-aos="fade-left"
            data-aos-offset="2"
          >
            <img
              src={comfysloth}
              alt="food delivery app"
              className="project-img"
            />
            <a
              href="https://github.com/JothikaAnbarasu/comfy-sloth"
              target="_blank"
              rel="noreferrer"
            >
              <span className="github-text">View GitHub</span>
            </a>
          </div>
          <div
            className="project-details-wrapper comfy-sloth-details-wrapper"
            data-aos="fade-right"
            data-aos-offset="2"
          >
            <h3 className="project-details-title">ComfySloth</h3>
            <p className="project-details-subtitle">
              Responsive <ProjectType>E-commerce website</ProjectType> with
              product filtering functionality, user authentication and stripe
              integration
            </p>
            <TeckStack>
              Tech stack :
              <ul>
                <li>html</li>
                <li>css</li>
                <li>reactjs</li>
                <li>javascript</li>
                <li>Styled-components</li>
              </ul>
            </TeckStack>
            <a
              href="https://react-e-com-comfy-sloth.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <ResumeBtn className="visit-btn">View Live</ResumeBtn>
            </a>
          </div>
        </Project>

        <Project>
          <div
            className="project-img-wrapper "
            data-aos="fade-right"
            data-aos-offset="2"
          >
            <img src={tictactoe} alt="Tic-Tac-Toe" className="project-img" />
            <a
              href="https://github.com/JothikaAnbarasu/Tic-Tac-Toe"
              target="_blank"
              rel="noreferrer"
            >
              <span className="github-text">View GitHub</span>
            </a>
          </div>
          <div
            className="project-details-wrapper"
            data-aos="fade-left"
            data-aos-offset="2"
          >
            <h3 className="project-details-title">Tic-Tac-Toe</h3>
            <p className="project-details-subtitle">
              Responsive <ProjectType> Tic-Tac-Toe game</ProjectType> with time
              travel feature
            </p>
            <TeckStack>
              Tech stack :
              <ul>
                <li>html</li>
                <li>css</li>
                <li>reactjs</li>
                <li>javascript</li>
              </ul>
            </TeckStack>
            <a
              href="https://master--react-application-tic-tac-toe.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ResumeBtn className="visit-btn">View Live</ResumeBtn>
            </a>
          </div>
        </Project>
      </div>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  text-align: left;
  color: ${(props) => props.theme.text};

  .project-content {
    padding: 0 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5%;

  .project-img-wrapper {
    width: 50%;
    margin: 8%;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 25px 5px grey;
    background-color: grey;
    &:hover {
      box-shadow: 0 0 25px 5px ${(props) => props.theme.shadow};
    }

    a {
      color: white;
    }
  }
  .github-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    font-size: x-large;
    font-weight: 500;
    cursor: pointer;
    text-align: center;

    &:hover {
      opacity: 0.5;
    }
  }
  .project-img {
    height: 300px;
    width: 500px;
    transition: transform 0.3s ease-in-out;
    object-fit: cover;
  }

  .project-img-wrapper:hover .github-text {
    opacity: 1;
  }

  .project-img-wrapper:hover .project-img {
    transform: scale(1.2);
    opacity: 0.5;
  }

  .project-details-wrapper {
    text-align: center;
    width: 50%;
  }

  .visit-btn {
    margin: auto;
  }

  .project-details-title {
    margin-bottom: 2rem;
    color: rgb(93, 121, 135);
  }

  .project-details-subtitle {
    color: whitesmoke;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.text};
  }

  .comfy-sloth-img-wrapper {
    order: 2;
  }
  .comfy-sloth-details-wrapper {
    order: 1;
  }

  @media screen and (max-width: 1000px) {
    .project-img-wrapper {
      width: 30%;
      height: 220px;
    }
    .project-details-wrapper {
      width: 70%;
    }
    .project-img {
      object-fit: fill;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 14%;
    .project-img-wrapper {
      width: 70%;
    }
    .project-details-wrapper {
      width: 100%;
    }
    .comfy-sloth-img-wrapper {
      order: 1;
    }
    .comfy-sloth-details-wrapper {
      order: 2;
    }
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 4%;
  }
`;

const ProjectType = styled.span`
  color: var(--clr-violet);
`;

const TeckStack = styled.h5`
  text-transform: uppercase;
  color: grey;
  margin-bottom: 6%;

  ul {
    font-weight: 400;
    li {
      display: inline-block;
      margin: 2px;
      padding: 4px;
    }
  }
`;
export default Projects;
