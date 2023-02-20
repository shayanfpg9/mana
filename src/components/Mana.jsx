import { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchResult from "./Content/SearchResult";
import Competition from "./Content/Competition";
import Err404 from "./Error/404";
import Dashboard from "./Dashboard/Dashboard";

export default class Mana extends Component {
  render() {
    document.body.classList.add("light");
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Competition api="./db/users.json" />} />
          <Route
            path="/team/:team"
            element={<SearchResult api="./../db/users.json" />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard api="./../db/users.json" />}
          />
          <Route path="*" element={<Err404 />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}
