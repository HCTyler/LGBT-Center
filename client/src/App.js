import React from "react";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./pages/Landing";
// import Volunteer from "./pages/Volunteer";
import NavBar from "./components/NavBar/navbar";
// import Footer from "./components/Footer/footer";


export default function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Landing />
        {/* <Volunteer /> */}
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </>
  );
}


