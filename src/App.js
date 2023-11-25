import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeButton from "./components/ThemeButton";
import Experience from "./components/Experience";

const darkTheme = {
  text: "white",
  bg: "var(--dark-bg)",
  heroTitle: "rgb(148, 163, 184)",
  heroDescription: "#86a3b8",
  shadow: "white",
  eduInstiName: "#9db2bf",
  eduDuration: "#86a3b8",
  eduCgpa: "powderblue",
};

const lightTheme = {
  text: "black",
  bg: "var(--light-bg)",
  heroTitle: "rgb(30,41,59,.8)",
  heroDescription: "#526D82",
  shadow: "#495057",
  eduInstiName: "#495057",
  eduDuration: "#343a40",
  eduCgpa: "#6096ba",
};

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppContainer className="App">
        <Navigation />
        <ThemeButton toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Header />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.bg};
  transition: var(--transition);
`;

export default App;
