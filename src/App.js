import CreateEmployee from "./components/CreateEmployee";
import ListEmployees from "./components/ListEmployees";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Contactus from "./components/Contactus";

export default function App() {
  const router = createBrowserRouter([
    { index: true, element: <Home /> },
    { path: "/employees", element: <ListEmployees /> },
    { path: "/add-employee", element: <CreateEmployee /> },
    { path: "/contact-us", element: <Contactus /> },
    { path: "/edit-employee/:id", element: <CreateEmployee /> },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
