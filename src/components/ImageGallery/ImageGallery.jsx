import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImagesList } from './ImageGallery.styled';
import Loader from '../Loader';

const ImageGallery = ({ imageCards, loading, handleOpenModal }) => {
  return (
    <div>
      {loading && <Loader />}
      {!loading && imageCards && (
        <ImagesList className="gallery">
          {imageCards.map(imageCard => (
            <ImageGalleryItem
              key={imageCard.id}
              handleOpenModal={handleOpenModal}
              imageCard={imageCard}
            />
          ))}
        </ImagesList>
      )}
    </div>
  );
};

export default ImageGallery;
