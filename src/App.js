import React from 'react';
import {connect} from 'react-redux';
import DaysContainer from './containers/DaysContainer'
import './App.css'

class App extends React.Component{

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <DaysContainer/>
        
      </div>
    );
  }
  
}


export default connect()(App);
