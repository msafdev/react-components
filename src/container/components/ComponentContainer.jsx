// Components
import Card from "./Card";
import Navigation from "./Navigation";

const ComponentContainer = () => {
  return (
    <div className="h-full py-6 px-4 md:px-8 flex flex-col items-center justify-center md:overflow-auto">
      <div className="flex flex-col w-full gap-2">
        <h1 className="font-bold lg:text-3xl text-2xl">Component Name</h1>
        <p className="lg:text-lg text-md">
          This component is used for this and that.
        </p>
      </div>
      <div className="container min-w-[400px] w-full h-[400px] my-10 rounded-xl border-2 bg-gray-100 justify-center flex flex-col items-center gap-4">
        <Navigation />
      </div>
    </div>
  );
};
export default ComponentContainer;
