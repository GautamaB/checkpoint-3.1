import React, { Component } from "react";
import "./App.css";
import HeroWanted from "./components/HeroWanted";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfHeros: [
        {
          name: "Leia Organa",
          status: "alive",
          picture:
            "https://starwars-visualguide.com/assets/img/characters/5.jpg"
        },
        {
          name: "C-3PO",
          status: "alive",
          picture:
            "https://starwars-visualguide.com/assets/img/characters/2.jpg"
        },
        {
          name: "Biggs Darklighter",
          status: "dead",
          picture:
            "https://starwars-visualguide.com/assets/img/characters/9.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.arrayOfHeros.map(arrayOfHero => (
          <HeroWanted {...arrayOfHero} />
        ))}
      </div>
    );
  }
}

export default App;
