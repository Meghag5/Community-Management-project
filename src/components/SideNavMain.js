import Assignment from './Assignment';
import File from './File';
import { Switch, Route } from "react-router-dom";

function SideNavMain() {
  return (
      <div className="App">
        <Switch>
          <Route path="/assignment" component={Assignment} />
          <Route path="/file" component={File} />
        </Switch>
      </div>
  );
}

export default SideNavMain;