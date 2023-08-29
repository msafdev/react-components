// Pages
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <>
      <div className="flex md:hidden w-full h-screen flex-col items-center justify-center">
        <h1 className="text-[4vw]">
          This site is not responsive <span className="font-bold">YET</span>.
        </h1>
      </div>
      <div className="hidden main-container h-screen w-full md:flex justify-center items-center overflow-hidden">
        <AnimatedRoutes />
      </div>
    </>
  );
}

export default App;
