import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Contect from "./components/Contect";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [title1, settitle] = useState("Enable Dark Mode");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      settitle("Enable Light Mode");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been anable", "success");
    } else {
      setmode("light");
      settitle("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been anable", "danger");
    }
  };

  return (
    <div>
      <Router>
        <Navbar
          title="TextUtils"
          aboutus="Aboutus"
          contectus="Contectus"
          mode={mode}
          togglemode={togglemode}
          title1={title1}
        />

        <div className="container">
          <Alert alert={alert} />
        </div>
      

        <div className="container my-3">
          <Switch>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contect">
              <Contect/>
            </Route>
            

            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Text is hear"
                mode={mode}
              />
            </Route>

           

            

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
