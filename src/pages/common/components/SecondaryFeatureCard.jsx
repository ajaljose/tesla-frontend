const SecondaryFeatureCard = ({ image, title, description, showBtn = true }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">

            <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            <div className="p-6">

                <h3 className="text-2xl font-semibold text-gray-900">
                    {title}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                    {description}
                </p>

                {(showBtn && <button className="flex items-center gap-2 mt-6 text-gray-900 font-medium">
                    Learn More
                    <span>›</span>
                </button>)}

            </div>
        </div>
    );
};

export default SecondaryFeatureCard;