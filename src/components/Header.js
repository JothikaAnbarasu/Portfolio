import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer className="container">
      <h4 data-aos="fade-down">
        <a href="#">Jothika </a>
      </h4>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  h4 {
    padding: 4rem 3rem;
  }
  a {
    color: ${(props) => props.theme.text};
  }
  @media screen and (max-width: 720px) {
    h4 {
      padding: 2rem 1rem;
    }
  }
`;

export default Header;
