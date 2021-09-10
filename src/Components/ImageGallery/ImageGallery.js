import { Component } from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
// import s from "./ImageGalleryItem.module.css";

export default class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;

    if (prevSearchQuery !== nextSearchQuery) {
      fetch(
        `https://pixabay.com/api/?q=${nextSearchQuery}&page=номер_страницы&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then((images) => this.setState({ images }));
    }
  }

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
      </div>
    );
  }
}
