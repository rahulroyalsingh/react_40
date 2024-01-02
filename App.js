import './App.css';
import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Website</h1>
      <br />
      <Router>
        <Link to="/home" > Home Page </Link>
        <br />
        <Link to="/about" > About Page </Link>
        <Route path="/home"><Home /></Route>
        <Route path="/about"><About /></Route>
      </Router>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p> Our home page!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p> About our website!</p>
    </div>
  );
}

export default App;
