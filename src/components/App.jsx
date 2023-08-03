import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import ButtonLoadMore from './Button/Button';
import Modal from './Modal/Modal';

const apiUrl = 'https://pixabay.com/api/';
const apiKey = '36126930-7b2057d774b58ed23a3e8d721';

const App = () => {
  const [searchImage, setSearchImage] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageCards, setImageCards] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);

  const handleLoading = isLoading => {
    setLoading(isLoading);
  };

  const handleSearchSubmit = image => {
    setSearchImage(image);
    if (searchImage !== image) {
      setPage(0);
    }
  };

  useEffect(() => {
    if (searchImage.length) {
      handleLoading(true);

      setTimeout(() => {
        fetch(
          `${apiUrl}?q=${searchImage}&page=${
            page === 0 ? 1 : page + 1
          }&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => response.json())
          .then(imageCards => {
            if (imageCards.hits.length) {
              setImageCards(prevImages =>
                page > 0 ? [...prevImages, ...imageCards.hits] : imageCards.hits
              );
            }
          })
          .finally(handleLoading(false));
      }, 2000);
    }
  }, [page, searchImage]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleOpenModal = id => {
    setIsOpenModal(true);
    const selectedPicture = imageCards.find(
      image => image.id === id
    )?.largeImageURL;
    if (selectedPicture) {
      setSelectedPicture(selectedPicture);
    }
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery
        imageCards={imageCards}
        loading={loading}
        handleOpenModal={handleOpenModal}
      />

      <Modal
        isOpenModal={isOpenModal}
        selectedPicture={selectedPicture}
        handleCloseModal={handleCloseModal}
      />

      <ButtonLoadMore
        handleLoadMore={handleLoadMore}
        page={page}
        imageCards={imageCards}
        loading={loading}
      />
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default App;
