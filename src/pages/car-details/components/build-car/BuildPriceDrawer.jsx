import SelectableOptionList from "pages/common/components/SelectOptionList";
import { useMemo, useState } from "react";
import { buildCarConfig } from "../../cardetails.helpers";
import CustomButton from "pages/common/components/CustomButton";

const BuildPriceDrawer = ({ open, onClose, carData }) => {

    const data = useMemo(() => buildCarConfig(carData), [carData]);

    const [car] = useState(data);

    const [variant, setVariant] = useState(data.variants[0]);
    const [color, setColor] = useState(data.colors[0]);
    const [wheel, setWheel] = useState(data.wheels[0]);
    const [accessories, setAccessories] = useState([]);

    if (!car) return null;

    const toggleAccessory = (item) => {
        setAccessories((prev) =>
            prev.includes(item)
                ? prev.filter((a) => a !== item)
                : [...prev, item]
        );
    };

    const accessoriesTotal = accessories.reduce(
        (acc, item) => acc + item.price,
        0
    );

    const total =
        Number(car.basePrice) +
        Number(variant.price) +
        Number(color.price) +
        Number(wheel.price) +
        Number(accessoriesTotal);

    return (
        <>
            {/* Overlay */}

            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/40 transition ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            {/* Drawer */}

            <div
                className={`fixed top-0 right-0 h-full w-[420px] bg-white shadow-xl transform transition-transform duration-300 overflow-y-auto
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >

                <div className="p-6">
                    <div className="flex justify-between mb-6">
                        <h2 className="text-xl font-semibold">{car.name}</h2>
                        <button onClick={onClose} className="bg-red-500 text-white rounded-full w-[30px]">✕</button>
                    </div>

                    <div className="flex justify-between text-center mb-6 text-sm">
                        <div>
                            <p className="font-semibold text-2xl">{car.stats.range}</p>
                            <p className="text-gray-500 ">Range</p>
                        </div>

                        <div>
                            <p className="font-semibold text-2xl">{car.stats.topSpeed}</p>
                            <p className="text-gray-500">Top Speed</p>
                        </div>
                    </div>


                    <SelectableOptionList
                        title="Variants"
                        options={car.variants}
                        selected={variant}
                        onSelect={setVariant}
                    />

                    {/* Colors */}

                    <h3 className="font-semibold mb-3">Colors</h3>

                    <div className="flex gap-3 mb-8">
                        {car.colors.map((c, i) => (
                            <button
                                key={i}
                                onClick={() => setColor(c)}
                                style={{ backgroundColor: c.hex }}
                                className={`w-8 h-8 rounded-full border-2 ${color.name === c.name
                                    ? "border-black scale-110"
                                    : "border-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    <SelectableOptionList
                        title="Wheels"
                        options={car.wheels}
                        selected={wheel}
                        onSelect={setWheel}
                    />
                    <SelectableOptionList
                        title="Accessories"
                        options={car.accessories}
                        multiple
                        selectedItems={accessories}
                        toggleItem={toggleAccessory}
                    />

                </div>


                <div className="sticky bottom-0 bg-white border-t p-4">

                    <div className="flex justify-between mb-3">
                        <span className="font-semibold">Vehicle Price</span>
                        <span className="font-semibold">
                            ${Number(total).toFixed(2)}
                        </span>
                    </div>

                    <CustomButton
                        variant=""
                        size="lg"
                        className='w-full bg-black text-white'
                    >
                        Order Now
                    </CustomButton>

                </div>

            </div>
        </>
    );
};

export default BuildPriceDrawer;