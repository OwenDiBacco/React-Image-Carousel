function Carousel({ images }) {
    return (
        <div className="carousel" id="carousel">
            <div className="carousel-frame" id="carousel-frame">
                {images.map((image) => (
                    <img src={image.src} alt={image.alt} />
                ))}
            </div>
        </div>
    );
}

export default Carousel;