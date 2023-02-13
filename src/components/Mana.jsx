import { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import Parent from "./Content/Parent";

export default class Mana extends Component {
  render() {
    document.body.classList.add("light");
    return (
      <>
        <Header />
        <Parent />
        <Footer />
      </>
    );
  }
}
