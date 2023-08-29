const Introduction = () => {
  return (
    <div className="h-full py-6 px-4 md:px-8 flex flex-col items-center">
      <div className="flex flex-col w-full gap-2">
        <h1 className="font-bold lg:text-3xl text-2xl">Introduction</h1>
        <p className="lg:text-lg text-md">
          This is a free <code className="bg-gray-300 px-1">ReactJS</code> and{" "}
          <code className="bg-gray-300 px-1">TailwindCSS</code> component
          library that you can use for your project.
        </p>
        <p className="lg:text-md text-sm">
          <span className="font-bold ">Disclaimer:</span> This is not something
          you would want to use on production, I am making these for you to use
          it as a starting point for your project.
        </p>
      </div>
    </div>
  );
};
export default Introduction;
