import React from "react";
import styled from "styled-components";
import { skillsArr } from "../../src/utils/constants";

function Skills() {
  return (
    <SkillsContainer className="container">
      <div className="skills-title title" id="skills" data-aos="fade-right">
        Skills
      </div>
      <div className="skills-content">
        {skillsArr.map((icon, i) => {
          return (
            <div className="skills" data-aos="flip-down" key={i}>
              <img
                src={icon.imgurl}
                alt="skill icon"
                key={i}
                className="skill-icon-img"
              />
              <div className="skill-icon-name">{icon.name}</div>
            </div>
          );
        })}
      </div>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  margin-bottom: 6%;
  color: ${(props) => props.theme.text};

  .skills-title {
    text-align: left;
  }
  .skills-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem 2rem;
    padding: 7% 14%;
  }
  .skills {
    flex: 1 1 0;
    text-align: center;
  }
  .skill-icon-img {
    height: 80px;
    width: 80px;
    margin-bottom: 4px;
    transition: transform 0.4s;
    object-fit: contain;
    text-align: center;

    &:hover {
      transform: translateY(-0.7rem);
    }
  }
  .skill-icon-name {
    color: ${(props) => props.theme.heroDescription};
    /* color: #22303c; */
    text-align: center;
    font-weight: 500;
  }

  @media screen and (max-width: 700px) {
    .skill-icon-img {
      height: 60px;
      width: 60px;
    }
    .skills-content {
      padding: 4%;
    }
  }

  @media screen and (max-width: 500px) {
    .skills-content {
      gap: 2rem 1.5rem;
    }

    margin-bottom: 8%;
  }

  @media screen and (min-width: 1200px) {
    .skills-content {
      gap: 4rem 8rem;
    }
  }

  @media screen and (min-width: 1400px) {
    .skills-content {
      padding: 5% 10%;
    }
  }
`;
export default Skills;
