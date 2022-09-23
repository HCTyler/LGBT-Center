import "./App.css";
import { Switch, Route } from "react-router-dom";
import React from "react";
import Landing from "./pages/Landing";
import Navbar from "./components/header";
import Footer from "./components/footer";



function App() {
  return (
  <div>
    <Navbar />
    <Switch
    <Landing />
    <Footer />
  </div>
  )
}

export default App;
