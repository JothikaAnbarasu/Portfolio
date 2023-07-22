import React from "react";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import Typed from "react-typed";
import myImg from "../assets/my-image.jpg";

function Hero() {
  return (
    <HeroContainer className="container">
      <div className="hero-img-wrapper" data-aos="fade-up" data-aos-delay="400">
        <img src={myImg} alt="me" className="hero-img"></img>
      </div>
      <div className="hero-intro">
        <p data-aos="fade-up" data-aos-delay="600">
          Hi <span className="waving-hand">👋 </span> , I'm Jothika.
        </p>
      </div>
      <div className="hero-title">
        <h1 data-aos="fade-up" data-aos-delay="800">
          FRONTEND DEVELOPER.
        </h1>
      </div>
      <div className="hero-subtitle">
        <h4 data-aos="fade-up" data-aos-delay="1000">
          <Typed
            strings={[
              "Proficient in Reactjs",
              "Build pixel perfect responsive websites",
              "Seeking opportunity to kick-start my career",
              "Proficient in Reactjs",
            ]}
            typeSpeed={40}
            backSpeed={10}
            startDelay={1000}
          />
        </h4>
      </div>
      <div className="hero-description">
        <p data-aos="fade-up" data-aos-delay="1200">
          A Passionate Frontend Web Developer, crafting Engaging and Intuitive
          User Experiences for Web Applications and Websites
        </p>
      </div>
      <div
        className="hero-resume-btn-wrapper"
        data-aos="fade-up"
        data-aos-delay="1400"
      >
        <a
          href="https://drive.google.com/file/d/1C2NhIdYyvk6dw8hayMsni-yPeS6r-mG7/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <ResumeBtn className="hero-resume-btn">
            Resume &nbsp; <IoSend />
          </ResumeBtn>
        </a>
      </div>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8%;
  gap: 10px;

  .hero-img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    object-fit: contain;
    background-color: grey;
    pointer-events: none;
  }
  .hero-intro p {
    font-size: xx-large;
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.theme.text};
  }
  .hero-title h1 {
    color: ${(props) => props.theme.heroTitle};
    font-size: 90px;
    text-align: center;
  }
  .hero-subtitle h4 {
    color: var(--clr-violet);
  }
  .hero-description {
    padding: 0 5%;
    text-align: center;
  }
  .hero-description p {
    font-size: x-large;
    color: #86a3b8;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 720px) {
    .hero-title h1 {
      font-size: 50px;
    }
    margin-bottom: 10%;
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 20%;
    .hero-title h1 {
      font-size: 40px;
    }
    .hero-description p {
      font-size: large;
    }
    .hero-intro p {
      font-size: x-large;
      text-align: center;
    }
  }

  .waving-hand {
    animation: wave 2s infinite;
    display: inline-block;
    transform-origin: 75% 75%;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(16deg);
    }
    20% {
      transform: rotate(-6deg);
    }
    30% {
      transform: rotate(16deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(16deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const ResumeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: max-content;
  padding: 2px 20px;
  background-color: var(--clr-blue);
  border-radius: 10px;
  color: white;
  font-weight: bolder;
  letter-spacing: 1px;
  font-size: 20px;
  box-shadow: 0 0 10px 2px var(--clr-blue);
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 25px 5px var(--clr-blue);
    transform: translateY(-2px);
  }

  @media screen and (max-width: 450px) {
    height: 30px;
    padding: 2px 10px;
    font-size: 15px;
  }
`;
export default Hero;
