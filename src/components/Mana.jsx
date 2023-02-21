import { createContext, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchResult from "./Content/SearchResult";
import Competition from "./Content/Competition";
import Err404 from "./Error/404";
import Dashboard from "./Dashboard/Dashboard";
import axios from "axios";

export const DataContext = createContext([]);

export default function Mana() {
  const [state, setState] = useState([]);

  axios
    .get(
      new URL(
        process.env.PUBLIC_URL + "/db/users.json",
        window.location.origin
      ).href
    )
    .then((res) => {
      res.data.sort(sort);
      setState(res.data, []);
    });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <DataContext.Provider value={state}>
        <Routes>
          <Route path="/" element={<Competition />} />
          <Route path="/team/:team" element={<SearchResult />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
      </DataContext.Provider>
      <Footer />
    </Router>
  );
}

export function sort(a, b) {
  return b.payment - a.payment;
}

export function equal(a, b) {
  a = JSON.stringify(a);
  b = JSON.stringify(b);

  return a === b;
}
