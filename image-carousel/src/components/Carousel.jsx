import './Carousel.css';
import CarouselButton from './CarouselButton';

function Carousel({ images }) {
    let currentSlideIndex = 0;
    const changeCurrentSlideIndex = (direction) => {
        const carouselImages = document.querySelectorAll(".carousel-image-frame img"); // not maximally efficient to re-query each child element
        currentSlideIndex = (currentSlideIndex + direction + carouselImages.length) % images.length;
    }
    const setImageVisibility = (imageIndex) => ({
        display: imageIndex == currentSlideIndex ? "block" : "none",
    })
    return (
        <div className="carousel-container" id="carousel-container">
            <CarouselButton onClickFunction={() => changeCurrentSlideIndex(-1)} icon={"\u25C0"}></CarouselButton>
            <div className="carousel-image-frame" id="carousel-image-frame">
                {images.map((image, imageIndex) => (
                    <img key={imageIndex} src={image.src} alt={image.alt} style={setImageVisibility(imageIndex)}/>
                ))}
            </div>
            <CarouselButton onClickFunction={() => changeCurrentSlideIndex(1)} icon={"\u25B6"}></CarouselButton>
        </div>
    );
}

export default Carousel;