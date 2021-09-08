import { Component } from "react";
import Container from "./Components/Container/Container";
import Searchbar from "./Components/Searchbar/Searchbar";

// import shortid from "shortid";

export default class App extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Searchbar />
      </Container>
    );
  }
}
