import { Component } from "react";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Container from "./Components/Container/Container";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button/Button";
import s from "../src/Components/Loader/Loader.module.css";

export default class App extends Component {
  state = {
    searchQuery: "",
    images: [],
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevState.searchQuery;
    const nextSearchQuery = this.state.searchQuery;

    if (prevSearchQuery !== nextSearchQuery) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${nextSearchQuery}&page=${this.state.page}&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())

        .then((images) => this.setState({ images: images.hits }))
        .finally(() => this.setState({ loading: false }));
    } else if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${nextSearchQuery}&page=${this.state.page}&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())

        .then((images) =>
          this.setState({ images: [...prevState.images, ...images.hits] })
        )
        .finally(() => this.setState({ loading: false }));
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
    this.setState({ page: 1 });
  };

  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.loading && (
          <div className={s.loader}>
            <Loader
              type="Watch"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        )}
        <ImageGallery
          imgArr={this.state.images}
          toggleModal={this.toggleModal}
        ></ImageGallery>
        {this.state.images.length !== 0 && (
          <Button onLoadMore={this.loadMore} />
        )}

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
      </Container>
    );
  }
}
