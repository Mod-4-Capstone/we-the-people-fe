import React from "react";
import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <section className="layout">
      <Header />
      {props.children}
      <Footer />
    </section>
  );
};

export default Layout;
