import React from "react";
import InlineMapForm from "./components/InlineMapForm";
import Map from "./components/GoogleMap";
import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locationA: null,
      locationB: null
    };
  }

  handleFormSubmit = (locA, locB) => {
    this.setState({ locationA: locA, locationB: locB });
  };

  render() {
    return (
      <div>
        <InlineMapForm formSubmit={this.handleFormSubmit} />
        <Map locationA={this.state.locationA} locationB={this.state.locationB} />
      </div>
    );
  }
}

export default App;
