import { JSX } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

type LayoutProps = {
  children: JSX.Element;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="root__wrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Layout;
