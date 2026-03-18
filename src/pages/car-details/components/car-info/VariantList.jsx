import SecondaryFeatureCard from "pages/common/components/SecondaryFeatureCard";

const VariantList = ({ variants }) => {

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">

            <h2 className="text-3xl font-semibold mb-10">
                Key Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {variants.map((feature, index) => (
                    <SecondaryFeatureCard key={index} {...feature} showBtn={false} />
                ))}
            </div>

        </section>
    );
};

export default VariantList;