const CarCard = ({ car }) => {
    return (
        <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

            {/* Background Image */}
            <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${car.image})` }}
            ></div>

            {/* Sliding Content + Gradient */}
            <div
                className="
        absolute bottom-0 left-0 w-full
        transform transition-all duration-500
        group-hover:-translate-y-0
      "
            >

                {/* Gradient Background */}
                <div className="bg-gradient-to-t from-white via-white/80 to-transparent p-4">

                    {/* Always Visible */}
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <p className="text-gray-700 font-medium">{car.price}</p>

                    {/* Hidden until hover */}
                    <div
                        className="
            mt-3 opacity-0 max-h-0 overflow-hidden
            transition-all duration-500
            group-hover:opacity-100
            group-hover:max-h-40
          "
                    >
                        <div className="flex justify-between text-gray-800">

                            <div>
                                <p className="font-semibold">{car.range}</p>
                                <p className="text-xs text-gray-500">Range</p>
                            </div>

                            <div>
                                <p className="font-semibold">{car.topSpeed}</p>
                                <p className="text-xs text-gray-500">Top Speed</p>
                            </div>

                        </div>

                        <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">
                            View Details
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CarCard;