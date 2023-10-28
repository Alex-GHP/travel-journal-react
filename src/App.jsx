import React from "react";
import Navbar from "./Navbar";
import Place from "./Place";
import data from "./data";

function App() {
  console.log(data);
  const places = data.map((place) => {
    return <Place key={place.id} {...place} />;
  });
  return (
    <div>
      <Navbar />
      <section>{places}</section>
    </div>
  );
}

export default App;
