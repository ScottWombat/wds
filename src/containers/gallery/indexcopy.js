import React, { Component } from 'react';
import imgLayout from './imgLayout.css';
import Img from './image';

const Gallery = (props) => {
  const createImage = (image) => {
    let source = image.image;
    return <Img source={image.image}/>;
  };

  const createImages = (images) =>{
      
    return images.map(createImage);
  };
  return (
           <div className={imgLayout.photos}>
            {createImages(props.images)}
          </div>
  )
}
export default Gallery;