import React from 'react';
import {BrowserRouter as Router, Outlet,Link,Routes, Route} from 'react-router-dom';
import blogform from './blogform';
import { FaHome} from 'react-icons/fa';

const Blog= () => {
return (
	<div className="Page">
	<h1>You are in the Blog page!</h1>
	<Link to="/Blog/blogform"><button>Create New Post</button></Link>
	<Link to="/Blog/afficherblogs"><button>Display Posts</button></Link>
	<Link to="/"><FaHome/></Link>
	<Outlet />
  </div>
	
)
}

export default Blog
