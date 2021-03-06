import './ReferencesPage.css'
import React from 'react';
import { Link } from 'react-router-dom';

const ReferencesPage = () => {
  return (
    <div className="ReferencesPage">
        <header className="references-heading">References</header>
        &nbsp;&nbsp;&nbsp;
        <div className="references-container">
          <div className="references-img">
            <img className="ref-img" alt="book" src="https://i.imgur.com/KIlPKeH.jpg" />
          </div>
          <div className="references-links">
            <div className="link-row">
              <Link to='/references/playorder' className='link-box'>Play Order</Link>
              <Link to='/references/map' className="link-box">Map</Link>
              <Link to='/references/bestiary' className='link-box'>Bestiary</Link>
            </div>
            <div className="link-row">
              <Link to='/references/skills' className='link-box'>Skills</Link>
              <Link to='/references/abilities' className='link-box'>Heroic Abilities</Link>
              <Link to='/references/spells' className='link-box'>Spells</Link>
            </div>
            <div className="link-row">
              <Link to='/references/equipment' className='link-box'>Equipment</Link>
              <Link to='/references/weaponsandarmour' className='link-box'>Weapons & Armour</Link>
              <Link to='/references/herbsandpotions' className='link-box'>Herbs & Potions</Link>
            </div>
            <div className="link-row">
              <Link to='/references/magic' className='link-box'>Magic Items</Link>
              <Link to='/references/conditions' className='link-box'>Conditions</Link>
              <Link to='/references/endofgame' className='link-box'>End of Game</Link>
            </div>
          </div>
        </div>
    </div>
  )
}
 
export default ReferencesPage;
