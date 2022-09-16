import React from 'react';
import VoteHandler from './Votes';

const Gallery = () => {
  return (
    <div>
        <h1>This is Gallery - Vote for your favourit</h1>         
    <div className="Gallery">      
      <img className="galleryPic" src="./images/WHFB1.jpg" alt="pic1" />
      <img className="galleryPic" src="./images/WHFB2.jpg" alt="pic2" />  
      <img className="galleryPic" src="./images/WHFB3.jpg" alt="pic3" />
      <img className="galleryPic" src="./images/WHFB4.jpg" alt="pic4" />         
    </div>
    <div className="fav"><VoteHandler /></div>
    </div>
  );
};

export default Gallery;




