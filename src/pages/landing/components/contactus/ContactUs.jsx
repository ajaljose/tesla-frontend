import CustomButton from "pages/common/components/CustomButton";
import React from "react";

const ContactUs = () => {
    return (
        <div className="bg-white text-black">

            <section
                className="h-[60vh] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD.jpg')",
                }}
            >
                <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl">
                        We're here to help you explore, own, and experience the future of driving.
                    </p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-20 text-center">
                <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-medium mb-2">Customer Support</h3>
                        <p className="text-gray-600 mb-2">Available 24/7</p>
                        <p className="font-semibold">support@tesla.com</p>
                        <p className="text-gray-700 mt-1">+91 800 123 4567</p>
                    </div>

                    <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-medium mb-2">Sales Inquiries</h3>
                        <p className="text-gray-600 mb-2">Talk to our experts</p>
                        <p className="font-semibold">sales@tesla.com</p>
                        <p className="text-gray-700 mt-1">+91 800 987 6543</p>
                    </div>

                    <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-medium mb-2">Careers</h3>
                        <p className="text-gray-600 mb-2">Join our mission</p>
                        <p className="font-semibold">careers@tesla.com</p>
                        <p className="text-gray-700 mt-1">+91 800 222 3333</p>
                    </div>

                </div>
            </section>

            <section className="bg-gray-100 py-16 px-6 md:px-20">
                <h2 className="text-3xl font-semibold text-center mb-10">
                    Visit Our Showrooms
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {[
                        {
                            city: "New York",
                            address: "123 5th Avenue, NY 10001",
                            hours: "Mon–Sat: 10am – 7pm",
                        },
                        {
                            city: "Los Angeles",
                            address: "456 Sunset Blvd, CA 90028",
                            hours: "Mon–Sat: 10am – 7pm",
                        },
                        {
                            city: "Chicago",
                            address: "789 Michigan Ave, IL 60611",
                            hours: "Mon–Sat: 10am – 7pm",
                        },
                    ].map((location, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {location.city}
                            </h3>
                            <p className="text-gray-600">{location.address}</p>
                            <p className="text-gray-500 mt-2">{location.hours}</p>
                        </div>
                    ))}

                </div>
            </section>

            <section className="py-16 text-center px-6">
                <h2 className="text-3xl font-semibold mb-4">
                    Ready to Experience the Future?
                </h2>
                <p className="text-gray-600 mb-6">
                    Book a test drive or speak with our team today.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <CustomButton
                        variant=""
                        size="lg"
                        rounded='full'
                        className='bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black border border-black transition'
                    >
                        Book Test Drive
                    </CustomButton>
                    <CustomButton
                        variant=""
                        size="lg"
                        rounded='full'
                        className='border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition'
                    >
                        Explore Vehicles
                    </CustomButton>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;