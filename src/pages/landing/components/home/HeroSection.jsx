import FeatureStat from "pages/common/components/FeatureStat";
import FeatureCardsSection from "./FeatureCardSection";
import CustomButton from "pages/common/components/CustomButton";
import { useGetVehicleDetailsByRandomQuery } from "pages/landing/landing.services";


const HeroSection = () => {
    const { data } = useGetVehicleDetailsByRandomQuery();
    console.log(data);

    return (
        <>
            <section
                className="relative w-full max-h-[1080px] bg-cover bg-center pt-24"
                style={{
                    backgroundImage: `url(${data?.hero?.heroImage})`
                }}
            >

                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 ">

                    <div className="max-w-xl">

                        <p className="text-red-600 tracking-widest font-semibold uppercase">
                            {data?.hero?.brand}
                        </p>

                        <h1 className="text-6xl font-bold text-red-600 mt-2">
                            {data?.hero?.model}
                        </h1>

                        <p className="text-xl text-gray-600 mt-4">
                            {data?.hero?.tagline}
                        </p>

                        <div className="flex items-center gap-6 mt-8">

                            <CustomButton
                                variant="primary"
                                size="lg"
                                onClick={() => console.log("Explore")}
                                rounded="full"
                            >
                                Explore Now
                            </CustomButton>

                            <CustomButton
                                variant="secondary"
                                size="lg"
                                onClick={() => console.log("Explore")}
                                rounded="full"
                            >
                                ▶ Watch Demo
                            </CustomButton>
                        </div>
                    </div>

                    <div className="mt-50 pb-16">
                        <div className="max-w-5xl bg-white rounded-2xl shadow-lg py-6 flex justify-around">
                            {data?.hero?.stats.map((stat, index) => (
                                <FeatureStat key={index} {...stat} />
                            ))}
                        </div>
                    </div>

                </div>

            </section>
            <div className="max-w-7xl mx-auto px-6 mt-10 pb-16">
                <FeatureCardsSection featureCards={data?.features} />
            </div>
        </>
    );
};

export default HeroSection;