
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./component/Header";
function App() {

  return (
    <BrowserRouter>
    {/* header */}
    <Header/>
     <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="about"  element={<About/>}/>
        <Route path="/signup"  element={<SignUp/>}/>
        <Route path="/signin"  element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
