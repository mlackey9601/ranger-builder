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
            <Link to='/references/map' className='reference'>Map</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/references/bestiary' className='reference'>Bestiary</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/references/endofgame' className='reference'>End of Game</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/references/abilities' className='reference'>Heroic Abilities</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/references/spells' className='reference'>Spells</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/references/skills' className='reference'>Skills</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/references/equipment' className='reference'>Equipment</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/references/herbsandpotions' className='reference'>Herbs & Potions</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/references/weaponsandarmour' className='reference'>Weapons & Armour</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/references/magicitems' className='reference'>Magic Items</Link>
          </div>
        </div>
    </div>
  )
}
 
export default ReferencesPage;
