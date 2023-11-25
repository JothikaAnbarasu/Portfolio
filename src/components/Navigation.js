import React from "react";
import styled from "styled-components";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navigation() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <NavigationContainer>
      <input
        type="checkbox"
        className="navigation-checkbox"
        id="nav-toggle"
        checked={isChecked}
        readOnly
      />
      <button
        htmlFor="nav-toggle"
        className="navigation-btn"
        onClick={handleCheckboxChange}
        data-aos="fade-down"
      >
        <span className="navigation-icon">&nbsp;</span>
      </button>

      <div className="nav-background" data-aos="fade-down">
        &nbsp;
      </div>
      <div className="navigation-nav">
        <ul className="navigation-list">
          <li className="navigation-item">
            <AnchorLink
              href="#about"
              className="navigation-link"
              onClick={handleCheckboxChange}
            >
              About
            </AnchorLink>
          </li>
          <li className="navigation-item">
            <AnchorLink
              href="#education"
              className="navigation-link "
              onClick={handleCheckboxChange}
            >
              Education
            </AnchorLink>
          </li>
          <li className="navigation-item">
            <AnchorLink
              href="#experience"
              className="navigation-link "
              onClick={handleCheckboxChange}
            >
              Experience
            </AnchorLink>
          </li>
          <li className="navigation-item">
            <AnchorLink
              href="#skills"
              className="navigation-link"
              onClick={handleCheckboxChange}
            >
              Skills
            </AnchorLink>
          </li>
          <li className="navigation-item">
            <AnchorLink
              href="#projects"
              className="navigation-link"
              onClick={handleCheckboxChange}
            >
              Projects
            </AnchorLink>
          </li>
          <li className="navigation-item">
            <AnchorLink
              href="#contact"
              className="navigation-link"
              onClick={handleCheckboxChange}
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.div`
  .navigation-checkbox {
    display: none;
  }
  .nav-background {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    position: fixed;
    top: 3rem;
    right: 5rem;
    background-image: radial-gradient(
      ${(props) => props.theme.bg},
      var(--clr-violet)
    );
    z-index: 1000;
    transition: transform 0.8s linear;
  }
  .navigation-btn {
    background-color: white;
    height: 4.5rem;
    width: 4.5rem;
    position: fixed;
    top: 2.5rem;
    right: 4.5rem;
    border-radius: 50%;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 0 18px 4px var(--clr-blue);
    }
  }

  .navigation-nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .navigation-list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    pointer-events: none;
  }

  .navigation-item {
    margin: 1.5rem;
  }

  .navigation-link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 2rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: ${(props) => props.theme.text};
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        var(--clr-violet) 50%
      );
      background-size: 230%;
      transition: all 0.5s;
    }

    &:hover,
    &:active {
      background-position: 100%;
      transform: translateX(1rem);
      color: white;
    }
  }

  .navigation-checkbox:checked {
    ~ .nav-background {
      transform: scale(90);
    }

    ~ .navigation-nav {
      opacity: 1;
      width: 100%;

      .navigation-list {
        pointer-events: auto;
      }
    }

    + .navigation-btn .navigation-icon {
      background-color: transparent;
    }

    + .navigation-btn .navigation-icon::before {
      top: 0;
      transform: rotate(135deg);
    }

    + .navigation-btn .navigation-icon::after {
      top: 0;
      transform: rotate(-135deg);
    }
  }

  .navigation-btn:hover {
    & .navigation-icon::before {
      top: -0.7rem;
    }

    & .navigation-icon::after {
      top: 0.7rem;
    }
  }

  .navigation-icon {
    position: relative;

    &,
    &::before,
    &::after {
      width: 1.8rem;
      height: 3px;
      background-color: var(--clr-blue);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s ease;
    }

    &::before {
      top: -0.6rem;
    }
    &::after {
      top: 0.6rem;
    }
  }

  @media screen and (max-width: 740px) {
    .nav-background {
      height: 1.5rem;
      width: 1.5rem;
      top: 2rem;
      right: 3rem;
    }
    .navigation-btn {
      height: 2.5rem;
      width: 2.5rem;
      top: 1.5rem;
      right: 2.5rem;
    }
    .navigation-icon {
      &,
      &::before,
      &::after {
        width: 1.3rem;
        height: 3px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .navigation-link {
      &:link,
      &:visited {
        font-size: 1.4rem;
      }
    }
  }
`;

export default Navigation;
