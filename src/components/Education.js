import React from "react";
import styled from "styled-components";
import educationSvg from "../assets/education.svg";
import relevelimg from "../assets/relevel-logo.png";
import univerisityimg from "../assets/university-logo.jpg";
function Education() {
  return (
    <EducationContainer className="container">
      <div
        className="education-title title"
        id="education"
        data-aos="fade-left"
      >
        Education
      </div>

      <div className="education-content">
        <div className="edu-svg-wrapper" data-aos="fade-right">
          <img
            src={educationSvg}
            alt="girl reading
            "
            className="edu-svg"
          />
        </div>
        <div className="edu-details-wrapper">
          <EduDetailsWrapper
            className="degree-details-wrapper"
            data-aos="fade-up"
          >
            <h4 className="edu-title">Degree</h4>
            <p className="edu-institute">
              <span>
                <img
                  src={univerisityimg}
                  alt="universityLogo"
                  className="edu-logo"
                />
              </span>
              Manonmaniam Sundaranar University
            </p>
            <p className="edu-course">Bsc. in Mathematics</p>
            <p className="edu-duration">july 2019 - june 2022</p>
            <p className="edu-cgpa">CGPA : 9.5</p>
          </EduDetailsWrapper>

          <EduDetailsWrapper
            className="certification-details-wrapper "
            data-aos="fade-up"
          >
            <h4 className="edu-title">Certification</h4>
            <p className="edu-institute">
              <span>
                <img src={relevelimg} alt="relevelLogo" className="edu-logo" />
              </span>
              Relevel by Unacademy
            </p>
            <p className="edu-course">Frontend Development</p>
            <p className="edu-duration">july 2022 - may 2023</p>
            <a
              href="https://drive.google.com/file/d/1RX3P0idCn0IiJi2W7IPH1f__W9JZkx8n/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="edu-cert-btn">Certificate</button>
            </a>
          </EduDetailsWrapper>
        </div>
      </div>
    </EducationContainer>
  );
}

const EducationContainer = styled.div`
  margin-bottom: 10%;
  color: ${(props) => props.theme.text};

  .education-title {
    text-align: right;
  }

  .education-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 80%;
    margin: auto;
  }

  .edu-svg {
    height: 450px;
    width: 350px;
  }

  .edu-svg-wrapper {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .edu-details-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  @media screen and (max-width: 1120px) {
    .edu-svg {
      height: 350px;
      width: 250px;
    }

    .education-content {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 12%;
  }
`;

const EduDetailsWrapper = styled.div`
  p {
    margin-bottom: 3.5%;
  }

  .edu-title {
    color: ${(props) => props.theme.text};

    margin-bottom: 8%;
  }

  .edu-institute {
    color: ${(props) => props.theme.eduInstiName};
    font-size: large;
    display: flex;
    align-items: center;
  }

  .edu-course {
    color: var(--clr-blue);
    font-size: x-large;
    font-weight: 500;
  }

  .edu-duration {
    color: ${(props) => props.theme.eduDuration};
    font-size: 0.9rem;
  }

  .edu-logo {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .edu-cgpa {
    color: ${(props) => props.theme.eduCgpa};
    font-size: 0.9rem;
    font-weight: 600;
  }

  .edu-cert-btn {
    background-color: powderblue;
    padding: 1% 2%;
    border-radius: 2px;
    border: none;
    color: black;
    font-weight: bold;
    transition: all 0.3s;

    &:hover {
      color: powderblue;
      background-color: rgb(61, 64, 73);
    }
  }

  @media screen and (max-width: 400px) {
    .edu-course {
      font-size: large;
    }

    .edu-institute {
      font-size: medium;
    }
  }
`;
export default Education;
