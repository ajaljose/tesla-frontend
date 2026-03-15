import {
    FaXTwitter,
    FaDiscord,
    FaLinkedin,
    FaInstagram,
    FaYoutube
} from "react-icons/fa6";
import teslaLogo from "../../assets/tesla-text-logo.png";

const footerSections = [
    {
        title: "Product",
        links: [
            "Headless CMS",
            "Pricing",
            "GraphQL APIs",
            "Open source Starter-kit"
        ]
    },
    {
        title: "Explore",
        links: ["My feed", "Case studies", "Grok AI", "Referral Program"]
    },
    {
        title: "Company",
        links: [
            "About Tesla",
            "Careers",
            "Logos and media",
            "Changelog",
            "Feature Requests"
        ]
    },
    {
        title: "Blogs",
        links: ["Official Blog", "Engineering Blog", "Space X"]
    },
    {
        title: "Support",
        links: ["Support docs", "Contact", "Join discord"]
    }
];

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t">

            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-6 gap-10">

                <div className="col-span-2">

                    <div className="flex items-center">
                        <img
                            src={teslaLogo}
                            alt="Tesla Logo"
                            className="h-4 object-contain"
                        />
                    </div>

                    <p className="text-gray-600 mt-4">
                        Innovative electric vehicles designed for a sustainable future.                    </p>

                    <div className="flex gap-4 mt-6 text-gray-600 text-lg">
                        <FaXTwitter />
                        <FaDiscord />
                        <FaLinkedin />
                        <FaInstagram />
                        <FaYoutube />
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 border rounded-full px-4 py-2 text-sm bg-white">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        All systems operational
                    </div>

                </div>

                {footerSections.map((section, index) => (
                    <div key={index}>
                        <h3 className="font-semibold text-gray-900 mb-4">
                            {section.title}
                        </h3>

                        <ul className="space-y-3 text-gray-600">
                            {section.links.map((link, i) => (
                                <li key={i} className="hover:text-black cursor-pointer">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="border-t py-6">
                <div className="max-w-7xl mx-auto px-6 flex justify-between text-gray-600 text-sm">

                    <p>© 2026 Tesla — Elon Musk Inc.</p>

                    <div className="flex gap-6">
                        <span className="hover:text-black cursor-pointer">
                            Privacy Policy
                        </span>
                        <span className="hover:text-black cursor-pointer">
                            Terms
                        </span>
                        <span className="hover:text-black cursor-pointer">
                            Code of conduct
                        </span>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;