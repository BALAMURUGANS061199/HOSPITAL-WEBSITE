import { Fragment } from "react";
// import Navbars from "./Components/Navbar/Navbar";
import Home from "./pages/Home.jsx";
// import Footer from "./Components/Footer/Footer.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Contact from "./pages/Contact.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />{" "}
      {/* Home page set as the index route */}
      <Route path="/contact" element={<Contact />} /> {/* Contact route */}
    </Route>
  )
);

function App() {
  return (
    <Fragment>
      {/* <Navbars />
      <Home />
      <Footer /> */}
      <RouterProvider router={routes} />
    </Fragment>
  );
}

export default App;
