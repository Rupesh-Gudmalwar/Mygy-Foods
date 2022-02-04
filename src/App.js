import "./App.css";
import Welcome from "./components/welcome";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import MenuItm from "./components/MenuItm";
import MenuCatg from "./components/MenuCatg";

function App() {
  return (
    <>
      {/* <Welcome /> */}
      <Header />
      <Banner />

      <div className="flex">
        <MenuCatg />
        <MenuItm />
        <Cart />
      </div>

    </>
  );
}

export default App;
