import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import HireMe from "./components/hireMe";
import Projects from "./components/projects";
import MyBlog from "./components/myBlog";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Loader from "./loader";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Home />
      <About />

      <Skills />
      <HireMe />

      <Projects />
      <MyBlog />

      <Contact />
      <Footer />
      {/* <Loader/> */}
    </React.Fragment>
  );
}

export default App;
