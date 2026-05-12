import Bordered from "./Bordered";
import Header from "./Header";
import HomeContent from "./HomeContent";
import PageBorder from "./PageBorder";

export default function Home() {
  return (
    <PageBorder>
      <Header />
      <HomeContent />
    </PageBorder>
  );
}
