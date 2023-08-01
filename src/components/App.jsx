// import React from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ImageGallery from './ImageGallery';
// import Searchbar from './Searchbar';
// import ButtonLoadMore from './Button/Button';
// import Modal from './Modal/Modal';

// class App extends React.Component {
//   state = {
//     searchImage: '',
//     page: 0,
//     loading: false,
//     imageCards: [],
//     isOpenModal: false,
//     selectedPicture: null,
//   };

//   handleImages = (array, page) => {
//     this.setState({ imageCards: array });
//   };

//   handleLoading = loading => {
//     this.setState({ loading });
//   };

//   handleSearchSubmit = searchImage => {
//     this.setState({ searchImage });
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   handleOpenModal = id => {
//     console.log({ id });
//     this.setState({ isOpenModal: true });
//     const selectedPicture = this.state.imageCards.find(
//       image => image.id === id
//     )?.largeImageURL;
//     if (selectedPicture) {
//       this.setState({ selectedPicture });
//     }
//   };

//   handleCloseModal = () => {
//     this.setState({ isOpenModal: false });
//   };

//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.handleSearchSubmit} />
//         <ImageGallery
//           searchImage={this.state.searchImage}
//           page={this.state.page}
//           handleImages={this.handleImages}
//           imageCards={this.state.imageCards}
//           handleLoading={this.handleLoading}
//           loading={this.state.loading}
//           handleOpenModal={this.handleOpenModal}
//         />

//         <Modal
//           isOpenModal={this.state.isOpenModal}
//           selectedPicture={this.state.selectedPicture}
//           handleCloseModal={this.handleCloseModal}
//         />

//         <ButtonLoadMore
//           handleLoadMore={this.handleLoadMore}
//           page={this.state.page}
//           imageCards={this.state.imageCards}
//           loading={this.state.loading}
//         />
//         <ToastContainer autoClose={1000} />
//       </>
//     );
//   }
// }

// export default App;

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
