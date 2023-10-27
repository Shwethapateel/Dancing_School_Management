import React, { useRef} from 'react';
import './Imageslide.css';
import img from './Image.json';

const ImageSlider = () => {
  const boxRef = useRef(null);

  const handlePrev = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
      // console.log(width);
    }
  }

  const handleNext = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
      // console.log(width);
    }
  }

  return (
    <div id="ImageSlidermain">
      <button id="prevbtn" onClick={handlePrev}>
        <p>&lt;</p>
      </button>
      <button id="nextbtn" onClick={handleNext}>
        <p>&gt;</p>
      </button>

      <div id="ImageSliderblock" ref={boxRef}>
        {img.map((x, index) => (
          <div id='ImageSlidercard' key={index}>
            <img height={300} width={300} src={x.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
