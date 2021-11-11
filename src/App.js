import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SignUp from "./components/signUp/SignUp";
import DashBoard from "./components/HomePage/DashBoard/DashBoard";
import Items from "./components/HomePage/Items/Items";
import Cart from "./components/HomePage/Cart/Cart";
import PrivateRoute from "./components/HomePage/PrivateRoute";
//import the layout with the main navigation

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/signup" exact>
              <SignUp />
            </Route>
            <Route path="/dashboard" exact>
              <DashBoard />
            </Route>
            <Route path="/items" exact>
              <Items />
            </Route>
            <PrivateRoute path="/cart" component={Cart} />
          </Switch>
        </Layout>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
