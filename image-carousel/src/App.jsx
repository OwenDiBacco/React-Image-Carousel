import './App.css';
import React, { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

function App() {
  const [category, setCategory] = useState("nature");

  const images = {
    nature: [
      {"src": "https://placehold.co/400x600", "alt": "place holder 1"},
      {"src": "https://placehold.co/400x600", "alt": "place holder 2"},
      {"src": "https://placehold.co/400x600", "alt": "place holder 3"}
    ],
    city: [
      {"src": "https://placehold.co/400x600", "alt": "place holder 1"},
      {"src": "https://placehold.co/400x600", "alt": "place holder 2"},
      {"src": "https://placehold.co/400x600", "alt": "place holder 3"}
    ]
  }
  
  const handleCategoryChange = (imageCategory) => {
    setCategory(imageCategory);
  }

  return (
    <>
      <Header heading={"Owen's Image Carousel"}/>
      <Carousel images={images[category]}/>
      <Button text={"Nature"} onClickFunction={() => handleCategoryChange("nature")}/>
      <Button text={"City"} onClickFunction={() => handleCategoryChange("city")}/>
    </>
  )
}

export default App
