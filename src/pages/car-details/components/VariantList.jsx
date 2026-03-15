const VariantList = ({ variants }) => {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-3">
                Available Variants
            </h3>

            <ul className="space-y-2">
                {variants.map((variant, index) => (
                    <li key={index} className="text-gray-700">
                        • {variant}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VariantList;