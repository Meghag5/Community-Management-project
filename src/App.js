import Login from "./components/login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Assignment from "./components/Assignment";
import File from "./components/File";
import Navmain from "./components/Navmain";
import AppNav from "./components/AppNav";
import Help from "./components/Help";
import { Switch, Route, Redirect } from "react-router-dom";
import AppsIcon from "./components/AppsIcon";
import Calendar from "./teamsCalendar/calendar_app";
import Chat from "./chat/src/App";
import Loginform from "./components/SignInSide";
import Activity from "./components/Activity";
//import Video from "./video_app/src/components/App/App";

function App() {
  if (!localStorage.getItem("clicked")) return <Login />;
  // if we are not logged in then we are going to return the login form
  if (!localStorage.getItem("email")) return <Loginform />;
  return (
    <div className="App">
      <Navmain />
      {/* Here we are defining the path routes so we can connect our pages */}
      <Switch>
        {/*<Route path="/video" component={Video} />*/}
        <Route path="/activity" component={Activity} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/help" component={Help} />
        <Route path="/appsicon" component={AppsIcon} />
        <Route path="/appnav" component={AppNav} />
        <Route path="/assignment" component={Assignment} />
        <Route path="/file" component={File} />
        <Route path="/chat" component={Chat} />
        {/* activity is opened when there is no path defined */}
        <Redirect to="/activity" />
      </Switch>
    </div>
  );
}

export default App;
