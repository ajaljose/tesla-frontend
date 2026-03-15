import CustomButton from "pages/common/components/CustomButton";

const InfoSection = () => {
    const {
        title,
        description,
        stats,
        buttonText,
        backgroundImage
    } = {
        title: "Sustainable Energy",
        description:
            "Drive with zero emissions and lower your carbon footprint. Tesla creates a sustainable energy ecosystem for your home and lifestyle.",
        backgroundImage:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276",

        stats: [
            {
                value: "405 mi",
                label: "Zero Emission Range"
            },
            {
                value: "1.5M+",
                label: "Solar Panel Installations"
            },
            {
                value: "75T+",
                label: "Metric Tons of CO₂ Saved"
            }
        ],

        buttonText: "Learn More"
    };
    return (
        <section
            className="relative w-full min-h-[600px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <div className="max-w-xl">

                    <h2 className="text-4xl font-semibold text-gray-900">
                        {title}
                    </h2>

                    <p className="text-gray-700 mt-4 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex gap-14 my-10">
                        {stats.map((stat, index) => (
                            <div key={index} className={index !== 0 ? "border-l border-gray-300 pl-14" : ""}>
                                <h3 className="text-3xl font-semibold">{stat.value}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    <CustomButton
                        variant="primary"
                        size="sm"
                        onClick={() => console.log("Order Model S Plaid")}
                        rounded="full"
                    >
                        {buttonText}
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;