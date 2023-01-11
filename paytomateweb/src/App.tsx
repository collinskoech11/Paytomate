import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"

function App() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login-redirect" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
