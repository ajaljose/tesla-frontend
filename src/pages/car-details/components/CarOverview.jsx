const CarOverview = ({ description }) => {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-3">Overview</h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default CarOverview;