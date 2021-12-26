import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import OrderReview from "./components/OrderReview/OrderReview";
import Register from "./components/Register/Register";
import Shop from "./components/Shop/Shop";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <PrivateRoute path="/review">
              <OrderReview />
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <Checkout></Checkout>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/manage">
              <h1 style={{ textAlign: "center" }}>
                I'm too lazy to make this route :)
              </h1>
            </Route>
            <Route path="/order">
              <Order></Order>
            </Route>
            <Route path="*">
              <h1>404 not found</h1>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
