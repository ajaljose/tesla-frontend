import SelectableOptionList from "pages/common/components/SelectOptionList";
import { useState } from "react";

const BuildPriceDrawer = ({ open, onClose, slug }) => {

    const data = {
        "name": "Model 3",
        "basePrice": 36990,
        "stats": {
            "range": "363 mi",
            "topSpeed": "125 mph",
            "zeroToSixty": "4.9 sec"
        },
        "variants": [
            { "name": "Rear Wheel Drive", "price": 0 },
            { "name": "Premium RWD", "price": 5500 },
            { "name": "Performance", "price": 12000 }
        ],
        "colors": [
            { "name": "Stealth Grey", "price": 0, "hex": "#4a4a4a" },
            { "name": "Pearl White", "price": 1000, "hex": "#ffffff" },
            { "name": "Deep Blue", "price": 1000, "hex": "#1e3a8a" },
            { "name": "Red Multi-Coat", "price": 2000, "hex": "#dc2626" }
        ],
        "wheels": [
            { "name": "18 Photon Wheels", "price": 0 },
            { "name": "19 Sport Wheels", "price": 1500 }
        ],
        "accessories": [
            { "name": "Center Console Tray", "price": 35 },
            { "name": "Projection Lights", "price": 65 },
            { "name": "Roof Rack", "price": 400 }
        ]
    };

    const [car] = useState(data);

    const [variant, setVariant] = useState(data.variants[0]);
    const [color, setColor] = useState(data.colors[0]);
    const [wheel, setWheel] = useState(data.wheels[0]);
    const [accessories, setAccessories] = useState([]);

    /* Fetch car from API */

    console.log('slug', slug)
    if (!car) return null;

    /* Accessories toggle */

    const toggleAccessory = (item) => {
        setAccessories((prev) =>
            prev.includes(item)
                ? prev.filter((a) => a !== item)
                : [...prev, item]
        );
    };

    /* Price calculation */

    const accessoriesTotal = accessories.reduce(
        (acc, item) => acc + item.price,
        0
    );

    const total =
        car.basePrice +
        variant.price +
        color.price +
        wheel.price +
        accessoriesTotal;

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

                    {/* Header */}

                    <div className="flex justify-between mb-6">
                        <h2 className="text-xl font-semibold">{car.name}</h2>
                        <button onClick={onClose}>✕</button>
                    </div>

                    {/* Stats */}

                    <div className="flex justify-between text-center mb-6 text-sm">
                        <div>
                            <p className="font-semibold">{car.stats.range}</p>
                            <p className="text-gray-500">Range</p>
                        </div>

                        <div>
                            <p className="font-semibold">{car.stats.topSpeed}</p>
                            <p className="text-gray-500">Top Speed</p>
                        </div>

                        <div>
                            <p className="font-semibold">{car.stats.zeroToSixty}</p>
                            <p className="text-gray-500">0-60</p>
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

                {/* Sticky Price Footer */}

                <div className="sticky bottom-0 bg-white border-t p-4">

                    <div className="flex justify-between mb-3">
                        <span className="font-semibold">Vehicle Price</span>
                        <span className="font-semibold">
                            ${total.toLocaleString()}
                        </span>
                    </div>

                    <button className="w-full bg-black text-white py-3 rounded-lg">
                        Order Now
                    </button>

                </div>

            </div>
        </>
    );
};

export default BuildPriceDrawer;