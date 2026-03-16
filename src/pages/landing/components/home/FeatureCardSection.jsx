import FeatureCard from "pages/common/components/FeatureCard";

const FeatureCardsSection = ({ featureCards = [] }) => {
    // const featureCards = [
    //     {
    //         title: "Sustainable Energy",
    //         subtitle: "Go 100% Electric",
    //         image:
    //             "https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
    //     },
    //     {
    //         title: "Autonomous Driving",
    //         subtitle: "Future Mobility",
    //         image:
    //             "https://images.unsplash.com/photo-1583267746897-2cf415887172"
    //     },
    //     {
    //         title: "Premium Interior",
    //         subtitle: "Luxury Experience",
    //         image:
    //             "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    //     },
    //     {
    //         title: "Find a Tesla",
    //         subtitle: "Near You",
    //         image:
    //             "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    //     }
    // ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {featureCards.map((card, index) => (
                <FeatureCard key={index} {...card} />
            ))}
        </div>
    );
};

export default FeatureCardsSection;