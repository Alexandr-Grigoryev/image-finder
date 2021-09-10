import { Component } from "react";
import { ToastContainer } from "react-toastify";
import Container from "./Components/Container/Container";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import LoadMoreButton from "./Components/Button/Button";

// import ImageGalleryItem from "./Components/ImageGalleryItem/ImageGalleryItem";
// import shortid from "shortid";

export default class App extends Component {
  state = { searchQuery: "" };

  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery}>
          {/* <ImageGalleryItem /> */}
        </ImageGallery>
        <LoadMoreButton />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </Container>
    );
  }
}
