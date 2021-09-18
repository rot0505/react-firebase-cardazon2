import './App.css';
import Chops from './Chops';
import Fullz from './Fullz';
import Home from './Home';
import Leads from './Leads';
import Lessons from './Lessons';
import Services from './Services';
import Sidebar from './Sidebar.js';
import SidebarClosed from './SidebarClosed';
import Spoofing from './Spoofing';
import Tools from './Tools';
import '../src/Icons/font-awesome-4.7.0/css/font-awesome.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Sidebar/>
<div className="App">
     <Route path="/" exact component={Home}  />
     <Route path="/lessons" exact component={Lessons}  />
     <Route path="/leads" exact component={Leads}  />
     <Route path="/chospans" exact component={Chops}  />
     <Route path="/fullz" exact component={Fullz}  />
     <Route path="/spoofing" exact component={Spoofing}  />
     <Route path="/tools" exact component={Tools}  />
     <Route path="/services" exact component={Services}  />
     
     </div>
    </Router>
    
  );
}

export default App;
