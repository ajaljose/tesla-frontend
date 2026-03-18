import { useState } from "react";
import Pagination from "pages/common/components/Pagination";
import CarCard from "pages/common/components/CarCard";
import Filters from "pages/common/components/Filters";
import { useGetCarsQuery } from "../productlist.services";
import CustomLoader from "pages/common/components/CustomLoader";

const ProductList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [model, setModel] = useState("");
    const [range, setRange] = useState("");
    const [type, setType] = useState("");

    const itemsPerPage = 6;
    const { data, isLoading, isError, error } = useGetCarsQuery({
        name: search,
        model,
        range,
        type,
        page: currentPage,
        limit: itemsPerPage,
    });

    if (isLoading) {
        return (
            <CustomLoader />
        );
    }

    if (isError) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-10 text-center">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Oops! Something went wrong.</h2>
                <p className="text-gray-600">{error?.data?.message || "Failed to load cars. Please try again later."}</p>
            </div>
        );
    }

    const cars = data?.vehicles || [];
    const totalPages = data?.totalPages || 1;

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            <h1 className="text-4xl font-semibold mb-8">
                Explore Our Cars
            </h1>

            <Filters
                search={search}
                setSearch={setSearch}
                model={model}
                setModel={setModel}
                range={range}
                setRange={setRange}
                type={type}
                setType={setType}
            />

            {cars.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-500">No cars found matching your criteria.</p>
                </div>
            )}

            <div className="w-full flex justify-end">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>


        </div>
    );
};

export default ProductList;