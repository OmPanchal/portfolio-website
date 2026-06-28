import HomeSidebar from "./HomeSidebar";

const HomeHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex md:flex-row md:gap-12 flex-col items-center justify-between gap-2">
        <h1 className="md:text-6xl text-3xl">Om Panchal</h1>
      </div>
      <HomeSidebar />
    </div>
  );
};

export default HomeHeader;
