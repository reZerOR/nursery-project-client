import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const menu = [
  {
    name: "Products",
    to: "/products",
  },
  {
    name: "Manage",
    to: "/manage",
  },
];

const Navbar = () => {
  const navlinks = menu.map((item, idx) => (
    <NavLink
      key={idx}
      to={item.to}
      className={({ isActive }) =>
        `${isActive ? "text-green-500" : "text-white"} font-medium`
      }
    >
      {item.name}
    </NavLink>
  ));
  return (
    <nav className="bg-[#557C56] border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-10" alt="plant logo" />
        </Link>

        {/* for mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6 text-[#557C56]" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-primary1 font-popins">
            <div className="grid w-[200px] p-4">{navlinks}</div>
          </SheetContent>
        </Sheet>

        {/* for bigger screen */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex gap-6 font-medium">{navlinks}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
