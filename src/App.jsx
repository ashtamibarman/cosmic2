import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./Header";
import HomePage from "./HomePage";
import Explore from "./Explore";
import Gallery from "./Gallery";
import { useState } from "react";
import Blog from "./Blog";
import About from "./About";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <Header
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Header>

      {selectedTab === "Home" ? (
        <HomePage />
      ) : selectedTab === "Gallery" ? (
        <Gallery />
      ) : selectedTab === "Explore" ? (
        <Explore />
      ) : (
        <Blog />
      )}

      <About></About>
    </>
  );
}

export default App;
