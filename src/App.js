import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Donation from "./components/Donation/Donation";
import Event from "./components/Events/Event";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import NavBar from "./components/NavBar/NavBar";
import ManageVolenteer from "./components/ManageVolenteer/ManageVolenteer";

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/donation">
            <Donation/>
          
          </Route>
          <Route path="/events">
           <Event/>
          </Route>

          <Route path="/blogs">
           <Blog/>
          </Route>
          <Route path="/login">
           <Login/>
          </Route>
          
          <Route path="/register">
          <RegisterForm></RegisterForm>
          </Route>
          <Route path="/admin">
           <Admin/>
          </Route>
          <Route path="/volounteerList">
           <ManageVolenteer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
