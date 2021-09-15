import { Component } from "react";
import s from "./ImageGalleryItem.module.css";
import Modal from "../Modal/Modal";

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <li className={s.ImageGalleryItem}>
          <img
            src={`${this.props.URL}`}
            alt=""
            className={s.ImageGalleryItemImage}
            onClick={this.toggleModal}
          />
        </li>
        {showModal && (
          <Modal img={this.props.largeImg} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}
