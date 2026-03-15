const CarImageGallery = ({ image }) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-lg">
            <img
                src={image}
                alt="car"
                className="w-full h-[420px] object-cover"
            />
        </div>
    );
};

export default CarImageGallery;