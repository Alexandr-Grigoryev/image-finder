import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ URL }) => (
  <li className={s.ImageGalleryItem}>
    <img src={`${URL}`} alt="" className={s.ImageGalleryItemImage} />
  </li>
);
export default ImageGalleryItem;
