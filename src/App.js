import Login from './components/login'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Assignment from './components/Assignment';
import File from './components/File';
import Navmain from './components/Navmain';
//<Login/>
//<NavUp />
//<SideNav />

function App() {
  return (
    <div className="App">
      <Navmain />
      <File />
    </div>
  );
}

export default App;

