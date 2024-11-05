import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselSection.css";
import image1 from './image1.jpg'; // Замените на путь к вашей фотографии
import image2 from './image2.jpg'; // Замените на путь к вашей фотографии
import image3 from './image3.jpg'; // Замените на путь к вашей фотографии
import image4 from './image4.jpg'; // Замените на путь к вашей фотографии
import image5 from './image5.jpg'; // Замените на путь к вашей фотографии

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px", // Уменьшаем, чтобы боковые изображения были ближе к центральному
    beforeChange: (current, next) => setActiveIndex(next),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="carousel-section">
      <h1>Примеры суперприложений</h1>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
              <img src={image} alt={`Slide ${index + 1}`} />
              {activeIndex === index && (
                <span className="close-button" onClick={() => setActiveIndex(-1)}>
                  &times;
                </span>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

export default CarouselSection;
