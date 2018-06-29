import React, { Component } from "react";
import $ from "jquery";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    kitties: []
  }

  componentDidMount() {
    this.getKitties(12);
  }

  getKitties = numKitties => {
    API.search(numKitties)
      .then(res => {
        const $data = $($.parseXML(res.data));
        const $urls = $data.find("url");
        const kitties = $urls.map(function() {
          return {
            id: $(this).html().split("id=")[1].split("&amp;")[0],
            src: $(this).html(),
            wasClicked: false,
          }
        }).get();
        this.setState({ kitties });
      })
      .catch(err => console.log(err));
  }

  rearrangeKitties = kitties => {
    for (let i = kitties.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = kitties[i];
      kitties[i] = kitties[j];
      kitties[j] = temp;
    }
    return kitties;
  }

  checkIfAlreadyClicked = id => {
    const clickedKitty = this.state.kitties.filter(kitty => kitty.id === id);
    return clickedKitty[0].wasClicked ? true : false;
  }

  clickKitty = id => {
    if (this.checkIfAlreadyClicked(id)) {
      this.setState({ score: 0 });
      this.getKitties(12);
    } else {
      const kitties = this.state.kitties.map(kitty => {
        if (kitty.id === id) {
          kitty.wasClicked = true;
        }
        return kitty;
      });
      this.setState({
        topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore,
        score: this.state.score + 1,
        kitties: this.rearrangeKitties(kitties) 
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="container">
          <div className="row">
            {this.state.kitties.map((kitty) => (
              <ImageCard 
                key={kitty.id}
                id={kitty.id}
                src={kitty.src}
                clickKitty={this.clickKitty}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
