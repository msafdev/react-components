// Libs
import { useState } from "react";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

const Card = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white text-black px-4 py-5 rounded-[12px] shadow-none border-2 shadow-gray-200 w-[350px] hover:shadow- cursor-default transition-all duration-300 ease-in-out">
      <div className="header flex flex-row gap-4 px-2 pb-4">
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col justify-start">
          <h1 className="text-left leading-none font-bold">John Doe</h1>
          <p className="text-left leading-none">Semarang, Indonesia</p>
        </div>
      </div>
      <div className="w-full border-b-[1px] border-b-gray-300" />
      <div className="flex flex-col gap-2 pt-4 px-2">
        {isOpen ? (
          ""
        ) : (
          <div className="">
            <p className="w-full text-left text-sm text leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              eius iure illo voluptate culpa amet quisquam mollitia labore
              commodi.
            </p>
          </div>
        )}
        <div className="flex justify-between">
          <a
            className="hover:underline cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            More
          </a>
          <div className="flex gap-3">
            <a href="https://github.com/muhammadsalmanalfarisi">
              <TbBrandGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/muhammadsalmoon">
              <TbBrandLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
