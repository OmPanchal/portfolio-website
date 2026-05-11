import Bordered from "./Bordered";
import Header from "./Header";
import HomeContent from "./HomeContent";

export default function Home() {
  return (
    <Bordered className="bg-black flex flex-1 gap-8 items-center justify-center flex-col lg:m-30 lg:mx-40 md:m-20 m-5 p-10 relative">
      <Header />
      <HomeContent />
    </Bordered>
  );
}
