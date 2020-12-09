import './HomePage.css'
import React from 'react';

const HomePage = (props) => {
  return (
    <div className="HomePage">
        <header className="home-heading">Ranger Builder</header>
        <p>A warband building app for Rangers of Shadow Deep</p>
        <img className="home-img" alt="cover" src="https://i.imgur.com/dUvbVJZ.jpg"></img>
    </div>
  )
}
 
export default HomePage;
