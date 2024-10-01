import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OutLet } from "./Outlet.jsx/Outlet";

import { About } from "./Pages/About";

import { Service } from "./Pages/Service";
import { HomePage } from "./Pages/HomePage";
import { Contact } from "./Pages/Contact";
import { DriverRegistration } from "./Pages/DriverRegistration";
import { VehicleRegistration } from "./Pages/VehicleRegistration";

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
            <Route path="/" element={<OutLet/>}> 
            <Route index  element={<HomePage/>} /> 
            <Route path="/about"  element={<About/>} />
            <Route path="/service"  element={<Service/>} /> 
            <Route path="/contact"  element={<Contact/>} /> 
            <Route path="/Driver Registration"  element={<DriverRegistration/>} /> 
            <Route path="/Vehicle Registration"  element={<VehicleRegistration/>} /> 

</Route>
          
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
