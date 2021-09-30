import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import NotFound from "./components/NotFound/NotFound";
import Restorents from "./components/Restorents/Restorents";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/restorents">
            <Restorents />
          </Route>
          <Route path="/food/:idMeal">
            <FoodDetails></FoodDetails>
          </Route>
          <Route exact path="/">
            <Restorents></Restorents>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
