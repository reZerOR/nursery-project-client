import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const menu = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: 'Products',
    to: '/products'
  }
];

const Navbar = () => {
  return (
    <nav className="bg-[#E3F2AC] border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-16" alt="plant logo" />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid w-[200px] p-4">
              <Link
                to="#"
                className="text-lg font-medium hover:underline underline-offset-4"
              >
                Home
              </Link>
              <Link
                to="#"
                className="text-lg font-medium hover:underline underline-offset-4"
              >
                About
              </Link>
              <Link
                to="#"
                className="text-lg font-medium hover:underline underline-offset-4"
              >
                Services
              </Link>
              <Link
                to="#"
                className="text-lg font-medium hover:underline underline-offset-4"
              >
                Portfolio
              </Link>
              <Link
                to="#"
                className="text-lg font-medium hover:underline underline-offset-4"
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex gap-6 font-medium">
            <li>
              <Link to={"/"}>Products</Link>
            </li>
            <li>
              <Link to={"/"}>Products</Link>
            </li>
            <li>
              <Link to={"/"}>Products</Link>
            </li>
            <li>
              <Link to={"/"}>Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
