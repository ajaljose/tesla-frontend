import { useState } from "react";
import CarImageGallery from "./CarImageGallery";
import ColorSelector from "pages/common/components/ColorSelector";
import CarOverview from "./CarOverview";
import VariantList from "./VariantList";
import Specifications from "./Specifications";
import BuildPriceDrawer from "../build-car/BuildPriceDrawer";
import { useParams } from "react-router-dom";
import { useGetVehicleDetailsQuery } from "../../cardetails.services";

const CarDetails = () => {
    const { slug } = useParams();

    const { data, isLoading, error } = useGetVehicleDetailsQuery(slug);
    const [selectedColor, setSelectedColor] = useState(null);
    const [openConfigurator, setOpenConfigurator] = useState(false);

    if (isLoading) return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;
    if (error) return <div className="flex justify-center items-center h-screen text-2xl text-red-500">Error loading vehicle details</div>;

    const vehicle = data.hero || data;
    const colors = data.colors || vehicle.colors;
    const features = data.features || [];

    const currentColor = selectedColor || colors?.[0];

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-semibold">{vehicle.brand} {vehicle.model}</h1>
                <p className="text-2xl font-semibold">${vehicle.price}</p>
            </div>

            <CarImageGallery image={currentColor?.image_url || vehicle.heroImage} />
            <ColorSelector
                colors={colors}
                selectedColor={currentColor}
                setSelectedColor={setSelectedColor}
            />
            <div className="grid md:grid-cols-3 gap-10 mt-10">

                <CarOverview description={vehicle.tagline || vehicle.description} />

                <VariantList variants={features.map(f => f.title)} />

                <Specifications specs={vehicle.stats?.map(s => `${s.label}: ${s.value}`) || []} />

            </div>
            <div className="mt-12 flex justify-center">
                <button
                    onClick={() => setOpenConfigurator(true)}
                    className="bg-red-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-medium transition"
                >
                    Build and Price →
                </button>
            </div>
            <BuildPriceDrawer
                open={openConfigurator}
                onClose={() => setOpenConfigurator(false)}
                slug={slug}
            />
        </div>
    );
};

export default CarDetails;