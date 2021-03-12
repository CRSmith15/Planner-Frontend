import React from 'react';
import {Route, Link} from 'react-router-dom'
import './Home.css';


class Home extends React.Component {
   render() {
 return (
 <div className="home">
 <h1>Plann Ahead!</h1>
 <h2>Click 
     <Link to ='/days'>
         <button>
             Here
        </button>
      </Link> 
        to get started!</h2>
 </div>
);
}
}
export default Home;