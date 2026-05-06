import "./css/App.css";
import {BrowserRouter, Routes, Route, RouterProvider} from "react-router";
import router from "./Router.jsx";

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
