import React from "react";
import styled from "styled-components";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

function ThemeButton({ toggleTheme, isDarkTheme }) {
  return (
    <ThemeBtn onClick={toggleTheme}>
      {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
    </ThemeBtn>
  );
}

const ThemeBtn = styled.button`
  position: fixed;
  bottom: 2.5rem;
  right: 4.5rem;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 0 18px 4px var(--clr-blue);
  }
  svg {
    font-size: x-large;
  }

  @media screen and (max-width: 720px) {
    bottom: 1.5rem;
    right: 0.8rem;
    height: 1.8rem;
    width: 1.8rem;
    svg {
      font-size: large;
    }
  }
`;

export default ThemeButton;
