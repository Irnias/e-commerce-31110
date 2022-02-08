import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ResizeComponent from "./components/resize-component/ResizeComponent";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <ResizeComponent />
      <Routes />
    </div>
  );
}

export default App;
