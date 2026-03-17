import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { PATHS } from "../constants";

const CarCard = ({ car }) => {
    const navigate = useNavigate()
    return (
        <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

            <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${car.imageUrl})` }}
            ></div>

            <div
                className="
        absolute bottom-0 left-0 w-full
        transform transition-all duration-500
        group-hover:-translate-y-0
      "
            >

                <div className="bg-gradient-to-t from-white via-white/80 to-transparent p-4">

                    <h3 className="text-xl font-semibold">{car.model}</h3>
                    <p className="text-gray-700 font-medium">{car.price}</p>

                    <div
                        className="
            mt-3 opacity-0 max-h-0 overflow-hidden
            transition-all duration-500
            group-hover:opacity-100
            group-hover:max-h-40
          "
                    >
                        <div className="flex justify-between text-gray-800 mb-4">

                            <div>
                                <p className="font-semibold">{car.range}</p>
                                <p className="text-xs text-gray-500">Range</p>
                            </div>

                            <div>
                                <p className="font-semibold">{car.topSpeed}</p>
                                <p className="text-xs text-gray-500">Top Speed</p>
                            </div>

                        </div>


                        <CustomButton
                            variant="primary"
                            size="sm"
                            onClick={() => navigate(PATHS.CAR_DETAILS.replace(':slug', car.slug))}
                        >
                            View Details
                        </CustomButton>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CarCard;