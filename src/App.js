import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar/NavBar";

const appStyles = {
  height: 300,
  width: 300,
  backgroundColor: "red",
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hola, inicio de nuestro e-commerce :D</h1>
      <div style={appStyles} />
    </div>
  );
}

export default App;
