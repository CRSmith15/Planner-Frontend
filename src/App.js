import React from 'react';
import {connect} from 'react-redux';
import DaysContainer from './containers/DaysContainer'

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

//const mapStateToProps = (state) => {
//  return {
//    days: state.days
//  }
//}

export default connect()(App);
