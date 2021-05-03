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
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


export const UserContext = createContext()
function App() {

  const [loggedInUser , setLoggedInUser] = useState({});
 
  return (
    <div>

      <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
       
      <Router>
      {/* <p>{loggedInUser.name}</p> */}
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
       

          <Route path="/donation">
            <Donation/>
          </Route>

          <PrivateRoute path="/events">
           <Event/>
          </PrivateRoute>

          <Route path="/blogs">
           <Blog/>
          </Route>
          <Route path="/login">
           <Login/>
          </Route>
          
          <Route path="/register/:_id">
          <RegisterForm></RegisterForm>
          </Route>

          <PrivateRoute path="/admin">
           <Admin/>
          </PrivateRoute>

          <Route path="/volounteerList">
           <ManageVolenteer/>
          </Route>  

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
