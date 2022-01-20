import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ClassComponent } from "./components/class-component/ClassComponent";
import ComponentChildren from "./components/component-children/ComponentChildren";
import FunctionalComponent from "./components/function-component/FunctionalComponent";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import CartIcon from "./icon/CartIcon";

const age = 18;

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hola, inicio de nuestro e-commerce :D</h1>
      <hr />
      <ClassComponent age={age} name="Rodolfo" />
      <hr />
      <FunctionalComponent age={age} name="Mateo" />
      <CartIcon />
      <hr />
      <ItemListContainer />
      <ComponentChildren otherProp="El título">
        <h1>Hola, soy un componente hijo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          obcaecati! Iste, quia voluptas. Cumque blanditiis cupiditate suscipit.
          Sunt officiis harum minus modi eos! Ipsam excepturi natus porro ut,
          magni voluptatibus!
        </p>
      </ComponentChildren>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
