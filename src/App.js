import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <OrderReview />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
