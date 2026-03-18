import { useState } from "react";
import CarImageGallery from "./CarImageGallery";
import ColorSelector from "pages/common/components/ColorSelector";
import CarOverview from "./CarOverview";
import VariantList from "./VariantList";
import Specifications from "./Specifications";
import BuildPriceDrawer from "../build-car/BuildPriceDrawer";
import { useParams } from "react-router-dom";
import { useGetVehicleDetailsQuery } from "../../cardetails.services";
import CustomButton from "pages/common/components/CustomButton";
import CustomLoader from "pages/common/components/CustomLoader";

const CarDetails = () => {
    const { slug } = useParams();

    const { data, isLoading, error } = useGetVehicleDetailsQuery(slug);
    const [selectedColor, setSelectedColor] = useState(null);
    const [openConfigurator, setOpenConfigurator] = useState(false);

    if (isLoading) {
        return (
            <CustomLoader />
        );
    }
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
            <div className="pt-5 px-2 flex flex-col md:flex-row md:justify-between md:items-center gap-10">

                <ColorSelector
                    colors={colors}
                    selectedColor={currentColor}
                    setSelectedColor={setSelectedColor}
                />
                <CustomButton
                    variant="primary"
                    size="lg"
                    onClick={() => setOpenConfigurator(true)}
                >
                    Build & Price
                </CustomButton>
            </div>
            <VariantList variants={features} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ml-10 md:ml-0">

                <CarOverview description={vehicle.tagline || vehicle.description} />

                <Specifications specs={vehicle.stats?.map(s => `${s.label}: ${s.value}`) || []} />

            </div>
            <div className="mt-12 flex justify-center">

            </div>
            <BuildPriceDrawer
                open={openConfigurator}
                onClose={() => setOpenConfigurator(false)}
                carData={data}
            />
        </div>
    );
};

export default CarDetails;