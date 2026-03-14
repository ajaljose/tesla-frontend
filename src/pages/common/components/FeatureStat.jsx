const FeatureStat = ({ value, label }) => {
    return (
        <div className="flex flex-col items-center px-3 sm:px-4 md:px-6 text-center">

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                {value}
            </h3>

            <p className="text-xs sm:text-sm text-gray-500">
                {label}
            </p>

        </div>
    );
};

export default FeatureStat;