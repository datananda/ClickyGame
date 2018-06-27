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
    this.getKitties("?format=xml&results_per_page=12&type=png&size=small");
  }

  getKitties = query => {
    API.search(query)
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

  rearrangeKitties = () => {
    const kitties = this.state.kitties;
    for (let i = kitties.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = kitties[i];
      kitties[i] = kitties[j];
      kitties[j] = temp;
    }
    return kitties;
  }

  clickKitty = id => {
    const kitties = this.state.kitties.map((kitty) => {
      if (kitty.id === id) {
        if (!kitty.wasClicked) {
          this.setState({ score: this.state.score + 1 })
        }
        kitty.wasClicked = true;
      }
      return kitty;
    });
    this.setState({ kitties });
    this.setState({
      kitties: this.rearrangeKitties()
    });
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
