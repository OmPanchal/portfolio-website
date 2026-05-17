import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import PageBorder from "../components/PageBorder";

export default function Home() {
  return (
    <PageBorder>
      <Header />
      <HomeContent />
    </PageBorder>
  );
}
