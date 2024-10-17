import { Fragment } from "react";
import Navbars from "./Components/Navbar/Navbar";
import Home from "./pages/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Fragment>
        <Navbars />
        <Home />
        <Footer />
      </Fragment>
    </>
  );
}

export default App;
