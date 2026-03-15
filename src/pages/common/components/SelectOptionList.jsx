const SelectableOptionList = ({
    title,
    options = [],
    selected,
    onSelect,
    multiple = false,
    selectedItems = [],
    toggleItem,
}) => {
    return (
        <div className="mb-8">
            <h3 className="font-semibold mb-3">{title}</h3>

            <div className="space-y-2">
                {options.map((item, index) => {
                    const isSelected = multiple
                        ? selectedItems.some((i) => i.name === item.name)
                        : selected?.name === item.name;

                    return (
                        <div
                            key={index}
                            onClick={() =>
                                multiple ? toggleItem(item) : onSelect(item)
                            }
                            className={`flex justify-between items-center border p-3 rounded cursor-pointer transition
                ${isSelected
                                    ? "border-black bg-gray-100"
                                    : "border-gray-300 hover:border-gray-500"
                                }`}
                        >
                            <span>{item.name}</span>

                            {item.price !== undefined && (
                                <span className="text-sm text-gray-600">
                                    {item.price > 0 ? `+$${item.price}` : ""}
                                </span>
                            )}

                            {multiple && (
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    readOnly
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SelectableOptionList;