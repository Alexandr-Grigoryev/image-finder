import { Component } from "react";
import s from "./ImageGallery.module.css";

export default class ImageGallery extends Component {
  state = {
    images: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;

    if (prevSearchQuery !== nextSearchQuery) {
      //   this.setState({ status: Status.PENDING });

      fetch(
        `https://pixabay.com/api/?q=${nextSearchQuery}&page=номер_страницы&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then((images) => this.setState({ images }));
      // .then((pokemon) => this.setState({ pokemon, status: Status.RESOLVED }))
      // .catch((error) => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    return <ul className={s.ImageGallery}>{/* <ImageGalleryItem /> */}</ul>;
  }
}
