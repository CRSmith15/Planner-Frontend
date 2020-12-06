import React from 'react';

class App extends React.Component{

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/days/1/events')
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
  
}

export default App;
