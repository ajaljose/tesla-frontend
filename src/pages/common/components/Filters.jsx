import CustomButton from "./CustomButton";

const Filters = ({ search, setSearch, model, setModel, range, setRange, type, setType }) => {
    const handleClear = () => {
        setSearch("");
        setModel("");
        setRange("");
        setType("");
    };

    return (
        <div className="bg-white shadow rounded-xl p-4 flex flex-wrap gap-4 mb-10">

            <input
                type="text"
                placeholder="Search for a Tesla..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded px-3 py-2 flex-1 min-w-[180px] h-10"
            />

            <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="border rounded px-3 py-2 flex-1 min-w-[150px] h-10"
            >
                <option value="">All Models</option>
                <option value='Model 3'>Model 3</option>
                <option value='Model X'>Model X</option>
                <option value='Model Y'>Model Y</option>
                <option value='Model S'>Model S</option>
                <option value='Cybertruck'>Cybertruck</option>
            </select>

            <select
                value={range}
                onChange={(e) => setRange(e.target.value)}
                className="border rounded px-3 py-2 flex-1 min-w-[150px] h-10"
            >
                <option value="">Any Range</option>
                <option value='272'>272 miles</option>
                <option value='348'>348 miles</option>
                <option value='330'>330 miles</option>
                <option value='405'>405 miles</option>
                <option value='340'>340 miles</option>
            </select>

            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border rounded px-3 py-2 flex-1 min-w-[150px] h-10"
            >
                <option value="">Any Type</option>
                <option value='SUV'>SUV</option>
                <option value='Sedan'>Sedan</option>
                <option value='Truck'>Truck</option>
            </select>

            <CustomButton
                variant="primary"
                size="sm"
                onClick={handleClear}
            >
                Clear
            </CustomButton>

        </div>
    );
};

export default Filters;