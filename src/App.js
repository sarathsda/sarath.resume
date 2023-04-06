import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Menu from "./component/Menu";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import Pnf from "./component/Pnf";
import Resume from "./component/Resume";






function App(props){
  return(
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path={"/"} element = {<Home/>}></Route>
        <Route path={"/about"} element = {<About/>}About/>
        <Route path={"/contact"} element = {<Contact/>}>Contact</Route>
        <Route path={"/projects"} element = {<Projects/>}>Projects</Route>
        <Route path={"/resume"} element = {<Resume/>}>Resume</Route>
        <Route path={"/*"} element = {<Pnf/>}></Route>


      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;