import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routes from "./routes/Routes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
      <div className="App">
        <CartProvider>
          <Routes />
        </CartProvider>
        {/* <ResizeComponent /> */}
      </div>
);
}

export default App;
