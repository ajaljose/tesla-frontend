import FeatureCard from "pages/common/components/FeatureCard";

const FeatureCardsSection = ({ featureCards = [] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {featureCards.map((card, index) => (
                <FeatureCard key={index} {...card} />
            ))}
        </div>
    );
};

export default FeatureCardsSection;