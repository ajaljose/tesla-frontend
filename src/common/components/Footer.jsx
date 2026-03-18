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
    links: ["Headless CMS", "Pricing", "GraphQL APIs", "Open source Starter-kit"]
  },
  {
    title: "Explore",
    links: ["My feed", "Case studies", "Grok AI", "Referral Program"]
  },
  {
    title: "Company",
    links: ["About Tesla", "Careers", "Logos and media", "Changelog", "Feature Requests"]
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

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

        {/* Logo & Info */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <div className="flex items-center">
            <img
              src={teslaLogo}
              alt="Tesla Logo"
              className="h-4 object-contain"
            />
          </div>

          <p className="text-gray-600 mt-4">
            Innovative electric vehicles designed for a sustainable future.
          </p>

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

        {footerSections.map((section, index) => {
          const hideOnMobile = ["Explore", "Company", "Blogs"].includes(section.title);

          return (
            <div
              key={index}
              className={hideOnMobile ? "hidden sm:block" : ""}
            >
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3 text-gray-600">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:text-black cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

      </div>

      <div className="border-t py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between text-gray-600 text-sm gap-4 sm:gap-0">
          <p>© 2026 Tesla — Elon Musk Inc.</p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <span className="hover:text-black cursor-pointer">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer">Terms</span>
            <span className="hover:text-black cursor-pointer">Code of conduct</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;