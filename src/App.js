import "./App.css";
import { BrowserRouter as Router, Switch, Router } from "react-router-dom";
import Headers from "./components/headers";
import Productlist from "./components/productlist";
import Productdetails from "./components/productdetail";

function App() {
  return (
    <div>
      <Router>
        <Headers />
        <Route path="/" exact component={Productlist} />
        <Route path="/product/:productId" exact component={Productdetails} />
        <Route>404 not found</Route>
      </Router>
    </div>
  );
}

export default App;
