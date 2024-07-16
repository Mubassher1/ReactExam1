import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./pages/Home";
import Note from "./pages/Note";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/notes" element={<Note />}></Route>
          <Route path="/contacts" element={<Contact />}></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
