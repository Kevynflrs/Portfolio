import React from "react";
import "./index.css";
import Header from "./pages/Header/Header";
import Profile from "./pages/Profile/Profile";
import Competences from "./pages/Compétences/Competences";
import Footer from "./pages/footer/footer";
import Experience from "./pages/Expériences/Experiences";
import Projets from "./pages/Projets/Projets";

function App() {

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="space-y-8 lg:space-y-16">
        <Profile />
        <Competences />
        <Projets />
        <Experience />
      </main>
      
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
