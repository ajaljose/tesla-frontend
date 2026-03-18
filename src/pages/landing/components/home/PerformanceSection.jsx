import { useHeroCarSlug, useHeroModel } from "pages/common-services/selectors";
import CustomButton from "pages/common/components/CustomButton";
import { PATHS } from "pages/common/constants";
import { useNavigate } from "react-router-dom";

const PerformanceSection = () => {
    const bgImage =
        "https://images.unsplash.com/photo-1536617621572-1d5f1e6269a0";
    const heroModel = useHeroModel()
    const heroCarSlug = useHeroCarSlug()
    const navigate = useNavigate()
    return (
        <section
            className="relative w-full min-h-[600px] bg-cover bg-center flex items-center p-10"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/20 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

                <div className="max-w-lg">

                    <h2 className="text-4xl font-semibold text-gray-900">
                        Unmatched <br /> Performance
                    </h2>

                    <p className="text-gray-700 mt-4 leading-relaxed mb-6">
                        Experience the thrill of instantaneous torque and cutting-edge
                        speed. Tesla sets the standard for electric vehicle performance.
                    </p>


                    <CustomButton
                        variant="primary"
                        size="sm"
                        onClick={() => navigate(PATHS.CAR_DETAILS.replace(':slug', heroCarSlug))}
                        rounded="full"
                    >
                        Order {heroModel}
                    </CustomButton>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-8 lg:gap-16 mt-20">
                    <div className="sm:border-l-0 sm:pl-0 border-none sm:first:border-none">
                        <h3 className="text-3xl font-semibold">1.99 s</h3>
                        <p className="text-gray-600">0-60 mph</p>
                    </div>

                    <div className="sm:border-l border-gray-300 sm:pl-8 lg:pl-16 mt-6 sm:mt-0">
                        <h3 className="text-3xl font-semibold">200 mph</h3>
                        <p className="text-gray-600">Top Speed</p>
                    </div>

                    <div className="sm:border-l border-gray-300 sm:pl-8 lg:pl-16 mt-6 sm:mt-0">
                        <h3 className="text-3xl font-semibold">1,020 hp</h3>
                        <p className="text-gray-600">Peak Power</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PerformanceSection;