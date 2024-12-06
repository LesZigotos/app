import Header from "../component/header";
import Footer from "../component/footer";

function PodcastPage() {
  return (
    <div className="h-full bg-gray overflow-scroll">
      <Header />
      <div className="flex justify-center items-center h-96">
        <h1 className="text-4xl">Podcast Page</h1>
      </div>
      <Footer />
    </div>
  );
}

export default PodcastPage;
