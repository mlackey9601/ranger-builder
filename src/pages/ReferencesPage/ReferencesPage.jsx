import './ReferencesPage.css'
import React from 'react';
import { Link } from 'react-router-dom';

const ReferencesPage = () => {
  return (
    <div className="ReferencesPage">
        <header className="references-heading">References</header>
        &nbsp;&nbsp;&nbsp;
        <div className="references-container">
          <img className="references-img" alt="ranger" src="https://i.imgur.com/4t4IFi2.jpg"></img>
          <div className="references-links">
            <div className="link-row">
              <Link to='/references/map' className="link-box">Map</Link>
              <Link to='/references/bestiary' className='link-box'>Bestiary</Link>
              <Link to='/references/endofgame' className='link-box'>End of Game</Link>
            </div>
            <div className="link-row">
              <Link to='/references/abilities' className='link-box'>Heroic Abilities</Link>
              <Link to='/references/spells' className='link-box'>Spells</Link>
              <Link to='/references/skills' className='link-box'>Skills</Link>
            </div>
            <div className="link-row">
              <Link to='/references/equipment' className='link-box'>Equipment</Link>
              <Link to='/references/herbsandpotions' className='link-box'>Herbs & Potions</Link>
              <Link to='/references/weaponsandarmour' className='link-box'>Weapons & Armour</Link>
            </div>
            <div className="link-row">
              <Link to='/references/magicitems' className='link-box'>Magic Items</Link>
            </div>
          </div>
        </div>
    </div>
  )
}
 
export default ReferencesPage;
