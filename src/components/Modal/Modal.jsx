// import { useEffect, useRef } from 'react';
// import * as basicLightbox from 'basiclightbox';
// import '../../../node_modules/basiclightbox/dist/basicLightbox.min.css';

// const Modal = ({ isOpenModal, selectedPicture, handleCloseModal }) => {
//   const modalInstanceRef = useRef(null);

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     if (isOpenModal && selectedPicture) {
//       showModal(selectedPicture);
//     } else {
//       handleCloseModal();
//     }
//   }, [isOpenModal, selectedPicture, handleCloseModal]);

//   const showModal = selectedPicture => {
//     modalInstanceRef.current = basicLightbox.create(`
//       <img src=${selectedPicture} width="800" height="600">
//     `);

//     modalInstanceRef.current.show();
//   };

//   const handleKeyDown = event => {
//     if (event.key === 'Escape') {
//       if (modalInstanceRef.current) {
//         modalInstanceRef.current.close();
//       }
//       handleCloseModal();
//     }
//   };

//   return null;
// };

// export default Modal;
import { useEffect, useRef, useCallback } from 'react';
import * as basicLightbox from 'basiclightbox';
import '../../../node_modules/basiclightbox/dist/basicLightbox.min.css';

const Modal = ({ isOpenModal, selectedPicture, handleCloseModal }) => {
  const modalInstanceRef = useRef(null);

  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Escape') {
        if (modalInstanceRef.current) {
          modalInstanceRef.current.close();
        }
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpenModal && selectedPicture) {
      showModal(selectedPicture);
    } else {
      handleCloseModal();
    }
  }, [isOpenModal, selectedPicture, handleCloseModal]);

  const showModal = selectedPicture => {
    modalInstanceRef.current = basicLightbox.create(`
      <img src=${selectedPicture} width="800" height="600">
    `);

    modalInstanceRef.current.show();
  };

  return null;
};

export default Modal;
