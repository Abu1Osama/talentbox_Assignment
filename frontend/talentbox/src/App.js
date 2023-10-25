import logo from "./logo.svg";
import "./App.css";
import Course from "./Pages/Course";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";
import Auth from "./Components/Auth";
import AllRoute from "./Pages/AllRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
     <AllRoute/>
      <Toaster />
    </div>
  );
}

export default App;
