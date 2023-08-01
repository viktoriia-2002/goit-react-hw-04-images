import React from 'react';
import { Btn, BtnContainer } from './Button.styled';

class ButtonLoadMore extends React.Component {
  render() {
    const { handleLoadMore, page, imageCards, loading } = this.props;
    return (
      <BtnContainer>
        {page >= 0 && !!imageCards.length && !loading && (
          <Btn onClick={handleLoadMore} className="LoadMore">
            Load more
          </Btn>
        )}
      </BtnContainer>
    );
  }
}

export default ButtonLoadMore;
