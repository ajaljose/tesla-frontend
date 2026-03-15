import FeatureStat from "pages/common/components/FeatureStat";
import FeatureCardsSection from "./FeatureCardSection";
import CustomButton from "pages/common/components/CustomButton";

const heroImage =
    "https://digitalassets.tesla.com/tesla-contents/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_1080,q_auto,w_1920/c_pad,h_1080,w_1920/v1770413070/Group_44?pgw=1";

const HeroSection = () => {
    const heroStats = [
        { value: "390 mi", label: "Range" },
        { value: "1.99 s", label: "0-60 mph" },
        { value: "1,020 hp", label: "Power" },
        { value: "Autopilot", label: "Included" }
    ];
    return (
        <section
            className="relative w-full max-h-[1080px] bg-cover bg-center pt-24"
            style={{
                backgroundImage: `url(${heroImage})`
            }}
        >

            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 ">

                <div className="max-w-xl">

                    <p className="text-red-600 tracking-widest font-semibold">
                        TESLA
                    </p>

                    <h1 className="text-6xl font-bold text-red-600 mt-2">
                        Model S Plaid
                    </h1>

                    <p className="text-xl text-gray-600 mt-4">
                        The Future of Performance.
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

                <div className="mt-40">
                    <div className="max-w-5xl bg-white rounded-2xl shadow-lg py-6 flex justify-around">
                        {heroStats.map((stat, index) => (
                            <FeatureStat key={index} {...stat} />
                        ))}
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 mt-10 pb-16">
                <FeatureCardsSection />
            </div>
        </section>
    );
};

export default HeroSection;