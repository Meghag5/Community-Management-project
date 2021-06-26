//import Login from "./components/login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Assignment from "./components/Assignment";
import File from "./components/File";
import Navmain from "./components/Navmain";
import AppNav from "./components/AppNav";
import Help from "./components/Help";
import { Switch, Route } from "react-router-dom";
import AppsIcon from "./components/AppsIcon";
import Calendar from "./teamsCalendar/calendar_app";

//<Login/>
//<NavUp />
//<SideNav />

/*
function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}
*/

function App() {
  return (
    <div className="App">
      <Navmain />
      {/* Here we are defining the path routes so we can connect our pages */}
      <Switch>
        <Route path="/calendar" component={Calendar} />
        <Route path="/help" component={Help} />
        <Route path="/appsicon" component={AppsIcon} />
        <Route path="/appnav" component={AppNav} />
        <Route path="/assignment" component={Assignment} />
        <Route path="/file" component={File} />
      </Switch>
    </div>
  );
}

export default App;
