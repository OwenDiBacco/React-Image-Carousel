function CarouselButton({onClickFunction, icon}) {
    return (
        <button onClick={onClickFunction}>{icon}</button>
    );
}

export default CarouselButton;