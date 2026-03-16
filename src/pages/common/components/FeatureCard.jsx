const FeatureCard = ({ title, subtitle, image }) => {
    return (
        <div
            className="
                    relative 
                    h-36 sm:h-40 md:h-44 
                    rounded-xl md:rounded-2xl 
                    overflow-hidden 
                    bg-cover bg-center 
                    flex flex-col justify-between 
                    p-4 sm:p-5 md:p-6
                    transition-all duration-300
                    shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)]
                    hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl
                    group
                    "
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>

            <div className="relative z-10">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                    {title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-700">
                    {subtitle}
                </p>
            </div>

            {(title === 'Find a Tesla') && <div className="relative z-10 self-start">
                <button className="text-lg sm:text-xl font-bold transition-transform duration-300 group-hover:translate-x-2 cursor-pointer">
                    →
                </button>
            </div>
            }
        </div>
    );
};

export default FeatureCard;