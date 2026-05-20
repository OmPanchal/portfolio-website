import Stars from "@/components/Stars";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import PageBorder from "../components/PageBorder";

export default function Home() {
  return (
    <PageBorder>
      <div className="w-full flex flex-col items-center justify-center flex-1">
        <Stars number={100} />
        <HomeContent />
      </div>
    </PageBorder>
  );
}
