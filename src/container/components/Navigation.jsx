// Libs
import { Link } from "react-router-dom";
import { PiCaretDownBold } from "react-icons/pi";
import { useState } from "react";

const Links = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "About",
    path: "",
  },
  {
    name: "Project",
    path: "",
  },
];

const Navigation = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="min-w-[320px] w-[70%] bg-white rounded-xl h-14 sticky top-0 z-50 border-gray-300 shadow-sm border-[1px]">
      <div className="container py-3 px-[10%] flex flex-row items-center justify-between">
        <Link to="/" className="flex gap-2 items-center cursor-pointer">
          <h1 className="text-xl font-extrabold tracking-[-0.1rem]">LOGO</h1>
        </Link>
        <div className="flex-row gap-4 items-center justify-end md:hidden lg:flex">
          {Links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              <div className="flex gap-2 items-center">
                <p>{link.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="md:block md:relative lg:hidden">
          <PiCaretDownBold
            onClick={() => setShow(!show)}
            className={`cursor-pointer ${show ? "rotate-180" : ""}`}
          />
          <div
            className={`fixed -translate-x-12 translate-y-7 py-2 px-4 rounded-lg flex-col gap-2 items-center justify-center bg-white border-2 ${
              show ? "flex" : "hidden"
            }`}
          >
            {Links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                <div className="flex gap-2 items-center">
                  <p>{link.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
