export const getMappedColors = (apiColors = []) => {
    return apiColors.map((apiColor, index) => ({
        name: apiColor.color_name,
        hex: apiColor.color_code,
        image: apiColor.image_url, // optional
        price: index * 1000
    }));
};

export function buildCarConfig(carData) {
    if (!carData) return null;

    return {
        name: carData?.hero?.model ?? "Unknown Model",
        basePrice: carData?.hero?.price ?? 0,

        stats: {
            range: carData?.hero?.range ?? 0,
            topSpeed: carData?.hero?.topSpeed ?? 0,
        },

        variants: (carData?.variants ?? [
            { name: "Rear Wheel Drive", price: 0 },
            { name: "Premium RWD", price: 5500 },
            { name: "Performance", price: 12000 }
        ]).map(v => ({
            name: v.name,
            price: v.price ?? 0
        })),

        colors: getMappedColors(carData?.colors ?? []),

        wheels: (carData?.wheels ?? [
            { name: "18 Photon Wheels", price: 0 },
            { name: "19 Sport Wheels", price: 1500 }
        ]),

        accessories: (carData?.accessories ?? [
            { name: "Center Console Tray", price: 350 },
            { name: "Projection Lights", price: 650 },
            { name: "Roof Rack", price: 400 }
        ])
    };
}