import "./App.css";
import Nav from "./componenets/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <button className={"shopping-cart-button"}>
        <svg src={process.env.PUBLIC_URL + "/images/shopping-cart.svg"} />
      </button> */}
      <div className={"home-page"}>
        <div className={"shop-now-wrapper"}>
          <div className={"shop-now"}>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="sample">
          <div className="cactus-wrapper">
            <img
              alt={"cactus"}
              src={process.env.PUBLIC_URL + "/images/cactus-plant.png"}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
