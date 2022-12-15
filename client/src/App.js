import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

// Importing pages
import Register from "./pages/Register"
import Login from "./pages/Login"
import Write from "./pages/Write"
import Home from "./pages/Home"
import Single from "./pages/Single"

// Importing reoccuring components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Importing styling
import "./style.scss"

// FUNTIONS
const Layout = () => {
  return (
    // Using React fragments because we need to use multiple components 
    <>
      <Navbar/>
      <Outlet/> 
      <Footer/>
    </>
  );
};

// ROUTES
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, // Pages that require a navbar
    children: [  // Provide the child pages to the Layout function with <Outlet/>
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
    ]
  },
  // Route for the register page
  {
    path: "/register",
    element: <Register/>
  },
  // Route for the login page
  {
    path: "/login",
    element: <Login />
  },
]);



function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />        {/* Using RouterProvider pass in the router */}
      </div>
    </div>
  );
}

export default App;
