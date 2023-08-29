// Libs
import { Link } from "react-router-dom";
import {
  PiNotebookBold,
  PiPlusCircleBold,
  PiArrowCircleRightBold,
  PiGitBranchBold,
} from "react-icons/pi";

// Links
const subLinks = [
  {
    name: "Getting Started",
    sublinks: [
      {
        name: "Installation",
        path: "/installation",
        icon: <PiPlusCircleBold />,
      },
      {
        name: "Usage",
        path: "/usage",
        icon: <PiNotebookBold />,
      },
      {
        name: "Contributing",
        path: "/contributing",
        icon: <PiGitBranchBold />,
      },
    ],
  },
  {
    name: "Components",
    sublinks: [
      {
        name: "Accordion",
        path: "/component",
        icon: <PiArrowCircleRightBold />,
      },
      {
        name: "Alert",
        path: "/alert",
        icon: <PiArrowCircleRightBold />,
      },
      {
        name: "Button",
        path: "/button",
        icon: <PiArrowCircleRightBold />,
      },
      {
        name: "Card",
        path: "/card",
        icon: <PiArrowCircleRightBold />,
      },
      {
        name: "Badge",
        path: "/badge",
        icon: <PiArrowCircleRightBold />,
      },
      {
        name: "Navigation",
        path: "/navigation",
        icon: <PiArrowCircleRightBold />,
      },
      {
        name: "Sidebar",
        path: "/sidebar",
        icon: <PiArrowCircleRightBold />,
      },
      {
        name: "Modal",
        path: "/modal",
        icon: <PiArrowCircleRightBold />,
      },
    ],
  },
];

const Aside = () => {
  return (
    <div className="h-full py-6 px-[10%] border-r-[1px] border-gray-300 flex flex-col justify-center overflow-y-auto">
      <div className="flex flex-col gap-7 lg:px-[10%] px-[8%]">
        {subLinks.map((link, index) => (
          <div key={index} className="cursor-default">
            <h3 className="md:text-[20px] lg:text-[24px] font-bold mb-3">
              {link.name}
            </h3>
            <ul className="flex flex-col gap-2">
              {link.sublinks.map((sublink, index) => (
                <li key={index}>
                  <Link
                    to={sublink.path}
                    className="md:text-[16px] lg:text-[20px] font-medium text-gray-600 hover:text-gray-900"
                  >
                    <div className="flex gap-2 items-center">
                      {sublink.icon}
                      <p>{sublink.name}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Aside;
