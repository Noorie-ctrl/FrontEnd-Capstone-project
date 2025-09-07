import Navbar from "../src/Components/Navbar"
import { Routes, Route } from "react-router-dom"
import Landing from "../src/Components/Landing"
import Footer from "../src/Components/Footer"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import SignUp from "./Pages/SignUp"
import Cart from "./Pages/Cart"
import Profile from "./Pages/Profile"
import Checkout from "./Pages/Checkout"
import Error from "./Pages/Error"
export default function App(){
  return(
    <>
    <Navbar />
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/About" element={<About />} />
      <Route path ="/Contact" element= {<Contact />} />
      <Route path ="/SignUp" element ={<SignUp />} />
      <Route path ="/Cart" element={<Cart />} />
      <Route path="/Profile" element ={<Profile />} />
      <Route path ="/Checkout" element ={<Checkout />} />
      <Route path="/Error" element ={<Error />} />
    </Routes>
     <Footer />
    </>
  )
}