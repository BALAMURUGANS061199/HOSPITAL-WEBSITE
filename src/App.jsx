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

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />} />
      <Route index path="/home" element={<Home />} />
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
