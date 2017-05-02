import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component  {
  render()  {
    return (
      <div className="jumbotron">
        <h1>React/Redux Tutorial</h1>
        <p>This is a tutorial that I am doing so I can learn React/Redux</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage
