import Login from "./components/login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Assignment from "./components/Assignment";
import File from "./components/File";
import Navmain from "./components/Navmain";
import { Switch, Route } from "react-router-dom";

//<Login/>
//<NavUp />
//<SideNav />

function App() {
  return (
    <div className="App">
      <Navmain />
      <Switch>
        <Route path="/assignment" component={Assignment} />
        <Route path="/file" component={File} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
