import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home.jsx"
import Formulario from "./Components/Formulario.jsx"
import './App.css';

function App() {
  return (
    <Router>
    <div>
       <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/formulario">
          <Formulario />
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
