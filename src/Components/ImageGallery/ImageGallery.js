import { Component } from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import LoadMoreButton from "../Button/Button";

// import s from "./ImageGalleryItem.module.css";

export default class ImageGallery extends Component {
  state = {
    images: [],
    page: this.props.initialValue,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;

    if (
      prevSearchQuery !== nextSearchQuery
      // && this.state.page === 1
    ) {
      this.setState({ page: 1 });
      // this.setState({ page: this.state.page + 1 });
      // this.setState({ page: 2 });

      fetch(
        `https://pixabay.com/api/?q=${nextSearchQuery}&page=${this.state.page}&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then((images) => this.setState({ images }));
      // .then((data) => ({
      //   page: this.setState({ page: this.state.page + 1 }),
      // .then((data) => this.setState({ page: (prevState.page += 1) }));
      // .then((data) => this.setState({ page: 1 }));
    }

    // else this.setState({ page: this.state.page + 1 });
    else if (prevState.page !== this.state.page) {
      fetch(
        `https://pixabay.com/api/?q=${nextSearchQuery}&page=${this.state.page}&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then((images) => this.setState({ images }));

      // this.setState(({ images }) => ({
      //   images: [images, ...prevState.images],
      // }));
    }
  }

  loadMore = () => {
    // this.setState({ page: this.state.page + 1 });

    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));

    // this.setState(({ images }) => ({
    //   images: [images, ...images],
    // }));

    // this.setState({ page: this.state.page + 1 });
    // this.setState({ page: 1 });

    // fetch(
    //   `https://pixabay.com/api/?q=${this.props.searchQuery}&page=${this.state.page}&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12`
    // )
    //   .then((response) => response.json())
    //   .then((images) => this.setState({ images }));
    // .then((data) => ({
    //   page: this.setState({ page: this.state.page + 1 }),
    // this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <div>
        {this.state.images.hits && (
          <ul className={s.ImageGallery}>
            {this.state.images.hits.map((item) => (
              <ImageGalleryItem key={item.id} URL={item.webformatURL} />
            ))}
          </ul>
        )}
        <LoadMoreButton onLoadMore={this.loadMore} />
      </div>
    );
  }
}
