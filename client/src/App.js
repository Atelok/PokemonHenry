
import {Routes, Route, useLocation} from "react-router-dom"
import {Landing, Home, Form, Detail, About, } from "./views/index.js"
import NavBar from './Components/Nav/NavBar';

function App() {

const location = useLocation()
  let {pathname} = location


  

  return (
    <>
    {pathname==="/"? null:<NavBar/>}
    <Routes>

    <Route path= "/" element={<Landing />} />
    <Route path = "/home" element={<Home/>} />
    <Route path = "/detail/:id" element={<Detail/>}/>
    <Route path = "/form" element={<Form/>}/>
    <Route path = "/About" element={<About/>}/>
    
    
    </Routes>
    </>
  );
}

export default App;
