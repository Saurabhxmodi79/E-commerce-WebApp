import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-new/subhome-xmedia-32//w/1920/IMAGE-landscape-fill-fef95cf3-94f0-4360-bd00-025eba0f5a41-default_0.jpg?ts=1691505386993",
    "https://static.zara.net/photos///contents/mkt/spots/aw23-north-man-edition/subhome-xmedia-29//w/1920/IMAGE-landscape-fill-86fd45a6-56f3-4846-9fe1-2c67c7ebbc97-default_0.jpg?ts=1689788290270",
    "https://static.zara.net/photos///contents/mkt/spots/aw23-north-kids-girl/subhome-xmedia-31//w/1920/IMAGE-landscape-default-fill-67cbe433-bbd2-4f21-a530-fb6e4a4f279d-default_0.jpg?ts=1690903804300",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
