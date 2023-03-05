import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./scenes/Checkout/Checkout";
import Confirmation from "./scenes/Checkout/Confirmation";
import CartMenu from "./scenes/Global/CartMenu";
// import FavoriteMenu from "./scenes/Global/FavoriteMenu"; // Work for Anther Day
import Footer from "./scenes/Global/Footer";
import NavBar from "./scenes/Global/NavBar";
import Home from "./scenes/Home/Home";
import ItemsDetails from "./scenes/ItemsDetails/ItemsDetails";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemsDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        {/* <FavoriteMenu />  Work for Anther Day */}
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
