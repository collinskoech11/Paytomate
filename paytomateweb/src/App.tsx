import "./App.css";
// import { useAuth0 } from "@auth0/auth0-react";
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import GoogleLogin from "react-google-login";
import {gapi} from "gapi-script"
import { useEffect, useState } from "react";

function App() {
  const [loginData, setLoginData] = useState<any>(
    null
  )
  // const { loginWithRedirect } = useAuth0();
  console.log("tokenGen", process.env.GOOGLE_CLIENT_ID)
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({clientId:"335314907055-tksiq61cchkpibvnoiu49jbhn6n7g46u.apps.googleusercontent.com"})
    })
  }, [])
  const handleFailure = (result:any) => {
      console.log("fail",result)
  }
  const handleLogin = (googleData:any) => {
    console.log("success",googleData.wt.Ad)
    setLoginData(googleData)
  }
  // console.log(loginWithRedirect)
  let myEmail:any = loginData?.email
  return (
    <>
      {/* <button onClick={() => loginWithRedirect()}>Log In</button> */}
      {loginData ? (
        <>
        you are logged in as {loginData.wt.Ad}
        </>
      ): <GoogleLogin
          clientId={"335314907055-tksiq61cchkpibvnoiu49jbhn6n7g46u.apps.googleusercontent.com"}
          buttonText="Log in with google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
        ></GoogleLogin>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login-redirect" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
