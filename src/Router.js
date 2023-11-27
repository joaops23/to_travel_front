// Pacote de roteamento do React
import { createBrowserRouter } from "react-router-dom"

import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import App from "./App";
import ErrorPage from "./pages/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <Home />,
          },
          {
            path: "login",
            element: <Login />,
          }
          // nested routes - identificador único
    ]
  }
])

export default Router;