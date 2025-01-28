import React from "react";
import "./index.css";
import Header from "./pages/Header/Header";
import Profile from "./pages/Profile/Profile";
import Competences from "./pages/Compétences/Competences";
import Footer from "./pages/footer/footer";
import Experience from "./pages/Expériences/Experiences";
import Projets from "./pages/Projets/Projets";
import Veille from "./pages/Veille/Veille";

function App() {

  return (
    <>
      <Header />
      <div className="space-y-8 lg:space-y-16">
        <Profile />
        <Competences />
        {/* <Projets /> */}
        <Experience />
        <Veille />
      </div>
      <Footer />
    </>
  );
}

export default App;
