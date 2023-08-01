import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { BtnSearch, Input, FormSearch } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchImage, setSearchImage] = useState('');

  const handleImageChange = event => {
    const image = event.currentTarget.value.toLowerCase();
    setSearchImage(image);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchImage.trim() === '') {
      toast.error('Please enter type of image!');
      return;
    }

    onSubmit(searchImage);
    setSearchImage('');
  };

  return (
    <header className="searchbar">
      <FormSearch className="form" onSubmit={handleSubmit}>
        <BtnSearch type="submit" className="button">
          <span className="button-label">Search</span>
        </BtnSearch>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchImage}
          onChange={handleImageChange}
        />
      </FormSearch>
    </header>
  );
};

export default Searchbar;
// export default Searchbar;
// export default Searchbar;
