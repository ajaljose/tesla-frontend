const ColorSelector = ({ colors, selectedColor, setSelectedColor }) => {
    return (
        <div className="flex gap-4 items-center mt-6">

            <p className="font-medium">Color:</p>

            {colors.map((color) => (
                <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color
                            ? "border-black scale-110"
                            : "border-gray-300"
                        }`}
                    style={{ backgroundColor: color }}
                />
            ))}

        </div>
    );
};

export default ColorSelector;