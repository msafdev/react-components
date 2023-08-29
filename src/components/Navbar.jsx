// Libs
import { Link } from "react-router-dom";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Docs",
    path: "/docs",
  },
  {
    name: "Github",
    path: "https://github.com/msafdev",
  },
];

const Navbar = () => {
  return (
    <header className="w-full h-14 sticky top-0 z-50 border-b-[1px] border-gray-300">
      <div className="container py-3 px-[10%]">
        <Link to="/" className="flex gap-2 items-center cursor-pointer">
          <h1 className="text-xl font-extrabold tracking-[-0.1rem]">msaf/ui</h1>
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
