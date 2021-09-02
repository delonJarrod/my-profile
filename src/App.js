import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
//import the layout with the main navigation

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
