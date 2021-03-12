import React from 'react';
import {Route, Link} from 'react-router-dom'
import './Home.css';


class Home extends React.Component {
   render() {
 return (
 <div id="home">
 <h2>Plann Ahead!</h2>
 <h3>Click 
     <Link to ='/days'>
         <button>
             Here
        </button>
      </Link> 
        to get started!</h3>
 </div>
);
}
}
export default Home;