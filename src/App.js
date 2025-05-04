import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Navbar from './navbar/navbar.jsx';
import Home from './home/home.jsx'; 
import About from './about/about.jsx';
import Projects from './projects/projects.jsx';
import NotFound from './404/notfound.jsx';
// import Resume from './resume/resume.jsx';
import Contact from './contact/contact.jsx';
//        <Route path = '/resume' component = {<Resume/>}/>
//<Route path = '/contact' component = {<Contact/>}/>
import Blog from './blog/blog.jsx';
function App() {
  return (
    <>      
        {/* <p>hello you have to have javascript enabled as this website dynamically generates content using it.</p>       */}
     <HashRouter>
    <Routes>
  <Route index element = {<Home/>}/>
  <Route path = '/about' element = {<About/>}/>
  <Route path = '/projects' element = {<Projects/>}/>
  <Route path = '*' element ={<NotFound/>}/>
  <Route path ='/contact' element ={<Contact/>}/>
  <Route path ='/mythoughts' element ={<Blog/>} />
    </Routes>
  </HashRouter>
    </>
  );
}
export default App;
