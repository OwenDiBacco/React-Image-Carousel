import './App.css';
import Button from ".components/Button";
import Header from "./components/Header";
import Carousel from "./components/Carousel";


function App() {
  let images = [
    {"src": "https://placehold.co/400x600", "alt": "place holder 1"},
    {"src": "https://placehold.co/400x600", "alt": "place holder 2"},
    {"src": "https://placehold.co/400x600", "alt": "place holder 3"}
  ]

  return (
    <>
      <Header heading={"Owen's Header"}/>
      <Carousel images={images}/>
      <Button text={"Nature"}/>
    </>
  )
}

export default App
