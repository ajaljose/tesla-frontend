const Specifications = ({ specs }) => {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-3">
                Key Specifications
            </h3>

            <ul className="space-y-2">
                {specs.map((spec, index) => (
                    <li key={index} className="text-gray-700">
                        • {spec}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Specifications;