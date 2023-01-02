import React from 'react';
import {BrowserRouter as Router, Link,Routes, Route} from 'react-router-dom'
import Blog from './blog';
import Contact from './contact';
import logo from './logo.png'; // Tell webpack this JS file uses this image

function Home() {
  return(
    <center>
    <img src={logo} width={400} height={400} alt="Logo"/>
   <h1>We Are Ines & Amina,Welcome to Our HomePage</h1>
   <h2>You can Browse Our Page with the <Link to="Contact">Contacts</Link> Or <Link to="Blog">Blog</Link> Links</h2>
     </center>
  )
}

export default Home;
  