import CustomButton from "./CustomButton";

const Filters = ({ search, setSearch }) => {
    return (
        <div className="bg-white shadow rounded-xl p-4 flex flex-wrap gap-4 mb-10">

            <input
                type="text"
                placeholder="Search for a Tesla..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded px-3 py-2 flex-1 min-w-[180px] h-10"
            />

            <select className="border rounded px-3 py-2 flex-1 min-w-[150px] h-10">
                <option>All Models</option>
            </select>

            <select className="border rounded px-3 py-2 flex-1 min-w-[150px] h-10">
                <option>Any Range</option>
            </select>

            <select className="border rounded px-3 py-2 flex-1 min-w-[150px] h-10">
                <option>Any Performance</option>
            </select>

            <CustomButton
                variant="primary"
                size="sm"
                onClick={() => console.log("Order Model S Plaid")}
            >
                Apply Filters
            </CustomButton>

        </div>
    );
};

export default Filters;