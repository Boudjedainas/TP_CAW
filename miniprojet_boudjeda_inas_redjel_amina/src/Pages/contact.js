import { FaHome} from 'react-icons/fa';
  import React from 'react';
import {BrowserRouter as Router, Outlet,Link,Routes, Route} from 'react-router-dom';


const Contact= () => {
return (
	<div className="Page">
	<h1>You are in the Contact page!</h1>
	<Link to="/Contact/Contactform"><button>Create New Contact</button></Link>
	<Link to="/Contact/AfficherContacts"><button>Display Contacts</button></Link>
  <Link to="/"><FaHome/></Link>

	<Outlet />
  </div>
	
)
}

export default Contact
