import React from 'react';
import './ResultList.css';

const ResultList = ({ images }) => (
  <div className='resultList-container'>
    {images.map((image, index) => (
      <img key={index} src={image.largeImageURL} alt='img' />
    ))}
  </div>
);

export default ResultList;
