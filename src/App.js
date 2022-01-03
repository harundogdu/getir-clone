/* components */
import Header from "components/Header";
import HeroSection from "components/HeroSection";
import Categories from "components/Categories";
import Campaigns from "components/Campaigns";
import Favourites from "components/Favourites";
import MobileApp from "components/MobileApp";
import Cards from "components/Cards";
import Footer from "components/Footer";

import { useWindowWidth } from "@react-hook/window-size";

/* function */
function App() {
  const windowWidthSize = useWindowWidth();
  return (
    <div className="h-screen bg-white">
      <Header />
      {windowWidthSize >= 768 ? (
        <HeroSection />
      ) : (
        <>
          <Campaigns /> <HeroSection />
        </>
      )}
      <Categories />
      {windowWidthSize >= 768 && <Campaigns />}
      <Favourites />
      <MobileApp />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
