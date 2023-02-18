import { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import Parent from "./Content/Parent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class Mana extends Component {
  render() {
    document.body.classList.add("light");
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Parent api="./db/users.json" />} />
          <Route
            path="/team/:team"
            element={<Parent api="../../db/users.json" />}
          />
        </Routes>
        <Footer />
      </Router>
    );
  }
}
