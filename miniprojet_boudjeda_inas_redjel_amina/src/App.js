import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
  import './App.css';
  import React from 'react';
  import Home from './Pages/home';
  import Blog from './Pages/blog';
  import Contact from './Pages/contact';
  import Blogform from './Pages/blogform';
  import Contactform from './Pages/contactform';
  import Afficherblogs from './Pages/afficherblogs';
  import Affichercontacts from './Pages/affichercontacts';


  export default function App () {
    return (
      <div className='tout'>
        <Router>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Blog" element={<Blog />}>
            <Route path="blogform" element={<Blogform/>} />
            <Route path="afficherblogs" element={<Afficherblogs/>} />
          </Route>
          <Route path="/Contact" element={<Contact />}>
            <Route path="contactform" element={<Contactform/>} />
            <Route path="affichercontacts" element={<Affichercontacts/>} />
          </Route>
      </Routes>
</Router>
      </div>
    );
    
  }
  