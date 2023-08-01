import React from 'react';
import { ImageItem, Img } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends React.Component {
  render() {
    const { imageCard, handleOpenModal } = this.props;
    return (
      <ul>
        <ImageItem
          className="gallery-item"
          key={imageCard.id}
          onClick={() => handleOpenModal(imageCard.id)}
        >
          <Img src={imageCard.webformatURL} alt="" />
        </ImageItem>
      </ul>
    );
  }
}
