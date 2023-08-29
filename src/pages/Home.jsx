// Libs
import { motion } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";

const Home = () => {
  // const location = useLocation();

  return (
    <div className="relative flex flex-col min-h-screen w-full">
      {/* navbar */}
      <Navbar />
      <div className="flex-1">
        <div className="w-full h-[calc(100vh-3.5rem)] flex flex-row">
          {/* aside */}
          <div className="flex-[2] min-w-[280px] max-w-[400px] hidden md:block">
            <Aside />
          </div>
          {/* main */}
          <div className="flex-[4]">
            <Outlet />
          </div>
        </div>
      </div>
      {/* footer */}
    </div>
  );
};

export default Home;
