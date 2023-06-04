import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { Action,Originals,ComedyMovies,RomanceMovies,HorrorMovies,Documentaries } from "./url";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <RowPost url={Originals} title="Netflix Originals"/>
      <RowPost url={Action} title="Action" isSmall />
      <RowPost url={ComedyMovies} title="ComedyMovies" isSmall />
      <RowPost url={RomanceMovies} title="RomanceMovies" isSmall />
      <RowPost url={HorrorMovies} title="HorrorMovies" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
