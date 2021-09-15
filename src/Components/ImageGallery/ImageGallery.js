import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ toggleModal, imgArr }) => (
  <div>
    {imgArr && (
      <ul className={s.ImageGallery}>
        {imgArr.map((item) => (
          <ImageGalleryItem
            key={item.id}
            URL={item.webformatURL}
            largeImg={item.largeImageURL}
            toggleModal={toggleModal}
          />
        ))}
      </ul>
    )}
  </div>
);

export default ImageGallery;
