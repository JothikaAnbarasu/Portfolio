import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer className="container">
      <h4 data-aos="fade-down">
        <a href="https://jothika-portfolio.netlify.app">Jothika </a>
      </h4>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  h4 {
    padding: 3.5rem;
  }
  a {
    color: ${(props) => props.theme.text};
  }

  @media screen and (max-width: 1300px) {
    h4 {
      padding: 2rem;
    }
  }
  @media screen and (max-width: 720px) {
    h4 {
      padding: 1.5rem;
    }
  }
`;

export default Header;
