import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Main
          data="02 de jul, 2021"
          titulo="Agora é oficial: o Windows 11 está vindo"
          texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
        />
        <Main
          data="02 de jul, 2021"
          titulo="Tim Berners-Lee vai leiloar código-fonte da web"
          texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
        />
        <Main
          data="02 de jul, 2021"
          titulo="Tem Firefox novo no pedaço e você vai querer migrar"
          texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est."
        />
        <Main
          data="02 de jul, 2021"
          titulo="John McAfee, criador do antivírus McAfee, morre"
          texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
        />
      </div>
    </div>
  );
}
