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

            <button className="bg-red-600 text-white px-4 py-2 rounded flex-1 min-w-[150px] h-10 hover:bg-red-700 transition">
                Apply Filters
            </button>

        </div>
    );
};

export default Filters;