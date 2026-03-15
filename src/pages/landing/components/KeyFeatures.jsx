import SecondaryFeatureCard from "pages/common/components/SecondaryFeatureCard";

const KeyFeatures = () => {
    const keyFeatures = [
        {
            title: "Autopilot",
            description:
                "Experience Full Self-Driving capabilities and advanced safety features that support you on your journey.",
            image:
                "https://images.unsplash.com/photo-1772171386187-bc14e6cd7804"
        },
        {
            title: "Next-Gen Battery",
            description:
                "Power your drive with Tesla's revolutionary battery technology designed for longer life and longer range.",
            image:
                "https://images.unsplash.com/photo-1767990495521-95cceb571125"
        },
        {
            title: "Ultra-Fast",
            description:
                "Recharge rapidly with Tesla's Supercharger network, getting you back on the road in minutes.",
            image:
                "https://images.unsplash.com/photo-1700411882036-f20df01413ff"
        }
    ];
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">

            <h2 className="text-3xl font-semibold mb-10">
                Key Features
            </h2>

            <div className="grid grid-cols-3 gap-8">
                {keyFeatures.map((feature, index) => (
                    <SecondaryFeatureCard key={index} {...feature} />
                ))}
            </div>

        </section>
    );
};

export default KeyFeatures;