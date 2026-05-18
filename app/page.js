import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import PageBorder from "../components/PageBorder";

export default function Home() {
  return (
    <PageBorder>
      <div className="flex flex-col flex-1 relative">
        <Header />
        <div className="w-full flex flex-col items-center justify-center flex-1">
          <HomeContent />
        </div>
      </div>
    </PageBorder>
  );
}

// yo gurt gurt: yo //
