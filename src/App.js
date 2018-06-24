import React, { Component } from "react";
import $ from "jquery";
import ImageCard from "./components/ImageCard";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    kitties: []
  }

  componentDidMount() {
    this.searchCats("?format=xml&results_per_page=12&type=png&size=small");
  }

  searchCats = query => {
    API.search(query)
      .then(res => {
        const $data = $($.parseXML(res.data));
        const $urls = $data.find("url");
        const kitties = $urls.map(function() {
          return {
            src: $(this).html(),
            wasClicked: false,
          }
        });
        this.setState({ kitties });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <div className="container">
          <div className="row">
            {this.state.kitties.map((i, kitty) => (
              <ImageCard 
                key={i}
                src={kitty.src}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
