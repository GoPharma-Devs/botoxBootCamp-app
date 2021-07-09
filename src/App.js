import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views/Home'
import Error from "./views/Error";
import Login from "./views/Login";
import Gracias from "./views/Gracias";
import FailRegistro from "./views/FailRegistro";


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          
        <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/gracias">
            <Gracias />
          </Route>

          <Route path="/upss">
            <FailRegistro />
          </Route>

          <Route>
            <h1>error</h1>
            <Error/>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
