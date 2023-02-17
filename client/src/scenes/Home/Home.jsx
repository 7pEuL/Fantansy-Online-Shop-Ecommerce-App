import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import SlideBanner from "./SlideBanner";

const Home = () => {
  return (
    <div className="home">
      <SlideBanner />
      <ShoppingList />
      <Subscribe />
    </div>
  );
};

export default Home;
