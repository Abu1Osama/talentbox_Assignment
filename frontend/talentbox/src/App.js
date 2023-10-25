import logo from "./logo.svg";
import "./App.css";
import Course from "./Pages/Course";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";
import Auth from "./Components/Auth";
import AllRoute from "./Pages/AllRoute";
import { useEffect, useState } from "react";

function App() {
  const [userpic, setuserpic] = useState(false)
  useEffect(() => {
    let pic = localStorage.getItem("pictures")
    if (pic) {
      setuserpic(pic);
    }
    else{
      setuserpic(false);
    }
  }, [])
  
  return (
    <div className="App">
      <Navbar userpic={userpic} setuserpic = {setuserpic}/>
     <AllRoute setuserpic={setuserpic}/>
      <Toaster />
    </div>
  );
}

export default App;
