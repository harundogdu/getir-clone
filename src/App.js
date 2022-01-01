/* components */
import Header from "components/Header";
import HeroSection from "components/HeroSection";
import Categories from "components/Categories";
import Campaigns from "components/Campaigns";
import Favourites from "components/Favourites";
import MobileApp from "components/MobileApp";
import Cards from "components/Cards";
import Footer from "components/Footer";

/* function */
function App() {
  return (
    <div className="w-full h-screen bg-mainBg ">
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <Favourites />
      <MobileApp />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
