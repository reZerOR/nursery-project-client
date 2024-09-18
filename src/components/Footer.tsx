import { containerStyle } from "@/utils/styles";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const sections = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: "#" },
      { name: "About", path: "#" },
      { name: "Services", path: "#" },
      { name: "Contact", path: "#" },
    ], // for custom title styling
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", path: "#" },
      { name: "Blog", path: "#" },
      { name: "Support", path: "#" },
      { name: "FAQs", path: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", path: "#" },
      { name: "Privacy Policy", path: "#" },
      { name: "Cookie Policy", path: "#" },
      { name: "Accessibility", path: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary1/25 mt-20 py-8 sm:py-12">
      <div className={`${containerStyle}`}>
        <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <Link to="#" className="flex items-center gap-2">
              <img src={logo} alt={"logo"} className="w-32" />
            </Link>
            <address className="not-italic text-muted-foreground">
              Road 4, Building 5
              <br />
              Bayzid Thana, Chittagong, Bangladesh
            </address>
          </div>
          {sections.map((section, index) => (
            <div key={index} className="grid gap-2">
              <h4 className="text-sm font-bold text-primary1 tracking-widest">
                {section.title}
              </h4>
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.path}
                  className="text-sm hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="container mt-8 flex flex-col items-center justify-between gap-4 sm:mt-12 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Plant. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="#" className="text-xs hover:underline">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
