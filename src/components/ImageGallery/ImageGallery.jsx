// import { useEffect } from 'react';
// import ImageGalleryItem from 'components/ImageGalleryItem';
// import { ImagesList } from './ImageGallery.styled';
// import Loader from '../Loader';
// import { useState } from 'react';

// const apiUrl = 'https://pixabay.com/api/';
// const apiKey = '36126930-7b2057d774b58ed23a3e8d721';

// const ImageGallery = ({
//   imageCards,
//   loading,
//   handleOpenModal,
//   searchImage,
//   page,
//   handleImages,
//   handleLoading,
// }) => {
//   const [prevImages, setPrevImages] = useState([]);
//   const [prevPage, setPrevsPage] = useState('');

//   useEffect(() => {
//     if (searchImage.length) {
//       handleLoading(true);
//       const isNewSearch = prevPage === page && imageCards.length !== 0;
//       setTimeout(() => {
//         fetch(
//           `${apiUrl}?q=${searchImage}&page=${
//             page === 0 ? 1 : page + 1
//           }&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
//         )
//           .then(response => response.json())
//           .then(imageCards => {
//             if (imageCards.hits.length > 0) {
//               const images = isNewSearch
//                 ? [...imageCards.hits]
//                 : [...prevImages, ...imageCards.hits];

//               handleImages(images);
//               setPrevImages(images);
//               setPrevsPage(page);
//             }
//           })
//           .finally(handleLoading(false));
//       }, 2000);
//     }
//   }, [searchImage, page]);

//   return (
//     <div>
//       {loading && <Loader />}
//       {!loading && imageCards && (
//         <ImagesList className="gallery">
//           {imageCards.map(imageCard => (
//             <ImageGalleryItem
//               key={imageCard.id}
//               handleOpenModal={handleOpenModal}
//               imageCard={imageCard}
//             />
//           ))}
//         </ImagesList>
//       )}
//     </div>
//   );
// };

// export default ImageGallery;

import { useEffect } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImagesList } from './ImageGallery.styled';
import Loader from '../Loader';
import { useState } from 'react';

const apiUrl = 'https://pixabay.com/api/';
const apiKey = '36126930-7b2057d774b58ed23a3e8d721';

const ImageGallery = ({
  imageCards,
  loading,
  handleOpenModal,
  searchImage,
  page,
  handleImages,
  handleLoading,
}) => {
  const [prevImages, setPrevImages] = useState([]);
  const [prevPage, setPrevsPage] = useState('');

  useEffect(() => {
    if (searchImage.length) {
      handleLoading(true);
      const isNewSearch = prevPage === page && imageCards.length !== 0;
      setTimeout(() => {
        fetch(
          `${apiUrl}?q=${searchImage}&page=${
            page === 0 ? 1 : page + 1
          }&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => response.json())
          .then(imageCards => {
            if (imageCards.hits.length > 0) {
              const images = isNewSearch
                ? [...imageCards.hits]
                : [...prevImages, ...imageCards.hits];

              handleImages(images);
              setPrevImages(images);
              setPrevsPage(page);
            }
          })
          .finally(handleLoading(false));
      }, 2000);
    }
  }, [searchImage, page]);

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
