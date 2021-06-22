import Login from "./components/login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Assignment from "./components/Assignment";
import File from "./components/File";
import Navmain from "./components/Navmain";
import AppNav from "./components/AppNav";
import { Switch, Route } from "react-router-dom";

//<Login/>
//<NavUp />
//<SideNav />

function App() {
  return (
    <div className="App">
      {/*<Login/>*/}
      <Navmain />
      <Switch>
      <Route path="/appnav" component={AppNav} />
      <Route path="/assignment" component={Assignment} />
      <Route path="/file" component={File} />
      </Switch>
    </div>
  );
}

export default App;
