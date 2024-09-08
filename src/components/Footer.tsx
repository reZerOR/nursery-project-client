import { containerStyle } from "@/utils/styles";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-muted py-8 sm:py-12">
      <div className={`${containerStyle}`}>
        <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <Link to="#" className="flex items-center gap-2">
              <img src={logo} alt={'logo'} className="w-32"/> 
            </Link>
            <address className="not-italic text-muted-foreground">
              Road 4, Building 5
              <br />
              Bayzid Thana, Chittagong, Bangladesh
            </address>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Quick Links</h4>
            <Link to="#" className="text-sm hover:underline">
              Home
            </Link>
            <Link to="#" className="text-sm hover:underline">
              About
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Services
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Contact
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Resources</h4>
            <Link to="#" className="text-sm hover:underline">
              Documentation
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Blog
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Support
            </Link>
            <Link to="#" className="text-sm hover:underline">
              FAQs
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Legal</h4>
            <Link to="#" className="text-sm hover:underline">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Cookie Policy
            </Link>
            <Link to="#" className="text-sm hover:underline">
              Accessibility
            </Link>
          </div>
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
