import SecondaryFeatureCard from "pages/common/components/SecondaryFeatureCard";
import { useGetTopGeneralFeaturesQuery } from "pages/landing/landing.services";

const KeyFeatures = () => {
    const { data: keyFeatures = [] } = useGetTopGeneralFeaturesQuery();
    return (
        <section className="max-w-7xl mx-auto !mt-0 px-6 py-16">

            <h2 className="text-3xl font-semibold mb-10">
                Key Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {keyFeatures.map((feature, index) => (
                    <SecondaryFeatureCard key={index} {...feature} />
                ))}
            </div>

        </section>
    );
};

export default KeyFeatures;