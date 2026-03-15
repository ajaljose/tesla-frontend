import { useState } from "react";
import Pagination from "pages/common/components/Pagination";
import CarCard from "pages/common/components/CarCard";
import Filters from "pages/common/components/Filters";

const ProductList = () => {
    const cars = [
        {
            id: 1,
            name: "Model S",
            range: "405 mi",
            price: 'Rs100000',
            topSpeed: "200 mph",
            image:
                "https://images.unsplash.com/photo-1700411881984-971bc29083bd"
        },
        {
            id: 2,
            name: "Model 3",
            range: "358 mi",
            price: 'Rs100000',
            topSpeed: "162 mph",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg"
        },
        {
            id: 3,
            name: "Model X",
            range: "348 mi",
            price: 'Rs100000',
            topSpeed: "163 mph",
            image:
                "https://plus.unsplash.com/premium_photo-1737677106532-840bafbf98fa"
        },
        {
            id: 4,
            name: "Model Y",
            range: "396 mi",
            price: 'Rs100000',
            topSpeed: "155 mph",
            image:
                "https://images.unsplash.com/photo-1622315471002-8f5617067fc4"
        }
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    const itemsPerPage = 6;

    const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

    const paginatedCars = filteredCars.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            <h1 className="text-4xl font-semibold mb-8">
                Explore Our Cars
            </h1>

            <Filters search={search} setSearch={setSearch} />

            <div className="grid grid-cols-3 gap-8">
                {paginatedCars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

        </div>
    );
};

export default ProductList;