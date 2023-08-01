import { useState } from 'react';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import ButtonLoadMore from './Button/Button';
import Modal from './Modal/Modal';

const App = () => {
  const [searchImage, setSearchImage] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageCards, setImageCards] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);

  const handleImages = (array, page) => {
    setImageCards(array);
  };

  const handleLoading = isLoading => {
    setLoading(isLoading);
  };

  const handleSearchSubmit = searchImage => {
    setSearchImage(searchImage);
  };

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
        searchImage={searchImage}
        page={page}
        handleImages={handleImages}
        imageCards={imageCards}
        handleLoading={handleLoading}
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
