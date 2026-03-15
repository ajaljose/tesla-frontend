import { useState } from "react";
import CarImageGallery from "./CarImageGallery";
import ColorSelector from "pages/common/components/ColorSelector";
import CarOverview from "./CarOverview";
import VariantList from "./VariantList";
import Specifications from "./Specifications";

const carData = {
    id: "model-3",
    name: "Tesla Model 3 Long Range",
    price: "$54,990",
    description:
        "The Tesla Model 3 Long Range features dual-motor all-wheel drive with impressive range and top-tier performance.",
    images: {
        white:
            "https://images.unsplash.com/photo-1724084202591-24080fd00e32",
        black:
            "https://images.unsplash.com/photo-1704233130715-3ae1659779b2",
        blue:
            "https://images.unsplash.com/photo-1767949374185-77f387080e0e",
        red:
            "https://plus.unsplash.com/premium_photo-1737677106532-840bafbf98fa",
    },
    variants: [
        "Standard Range Plus",
        "Long Range AWD",
        "Performance Model",
    ],
    specs: [
        "Dual Motor AWD",
        "333 Miles Range (EPA)",
        "Top Speed: 145 mph",
        "0-60 mph: 4.2 seconds",
    ],
};

const CarDetails = () => {
    const [selectedColor, setSelectedColor] = useState("white");

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-semibold">{carData.name}</h1>
                <p className="text-2xl font-semibold">{carData.price}</p>
            </div>

            {/* Image */}
            <CarImageGallery image={carData.images[selectedColor]} />

            {/* Color Selector */}
            <ColorSelector
                colors={Object.keys(carData.images)}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />

            {/* Info Section */}
            <div className="grid md:grid-cols-3 gap-10 mt-10">

                <CarOverview description={carData.description} />

                <VariantList variants={carData.variants} />

                <Specifications specs={carData.specs} />

            </div>

            {/* Build Button */}
            <div className="mt-12 flex justify-center">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-medium transition"
                >
                    Build and Price →
                </button>
            </div>

        </div>
    );
};

export default CarDetails;