import { Component } from "react";
import { ToastContainer } from "react-toastify";
import Container from "./Components/Container/Container";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
// import LoadMoreButton from "./Components/Button/Button";

// import ImageGalleryItem from "./Components/ImageGalleryItem/ImageGalleryItem";
// import shortid from "shortid";

export default class App extends Component {
  state = {
    searchQuery: "",
    //  page: 1
  };

  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };

  // loadMore = () => {fetch(
  //       `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${2}&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then((response) => response.json())
  //       .then((images) => this.setState({ images }));};

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          initialValue={1}
          // page={this.state.page}
        >
          {/* <ImageGalleryItem /> */}
        </ImageGallery>

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
