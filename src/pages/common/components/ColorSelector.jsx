const ColorSelector = ({ colors, selectedColor, setSelectedColor }) => {
    return (
        <div className="flex gap-4 items-center mt-6">

            <p className="font-medium">Color:</p>

            {colors?.map((color, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor?.color_name === color.color_name
                            ? "border-black scale-110"
                            : "border-gray-300"
                        }`}
                    style={{ backgroundColor: color.color_code }}
                    title={color.color_name}
                />
            ))}

        </div>
    );
};

export default ColorSelector;