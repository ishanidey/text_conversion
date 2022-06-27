import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
const [alert,setAlert] = useState(null);

const showAlert = (message,type) =>{
  setAlert({
    msg:message,
    type: type
  })
  setTimeout(()=>{
setAlert(null)
  },1500);
}
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
        <Alert alert={alert} />
        <div className="container my-4">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <Textform  showAlert={showAlert} heading="Enter the text to perform following actions." />
          
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
