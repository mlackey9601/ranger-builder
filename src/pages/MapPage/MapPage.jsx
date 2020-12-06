import './MapPage.css';
import React from 'react';

const MapPage = () => {


    return (
        <div className="MapPage">
            <header className="map-heading">Map of Alladore</header>
            &nbsp;&nbsp;&nbsp;
            <img className="map-img" alt="cover" src="https://i.imgur.com/4issJrn.png"></img>
            <p className='map-credit'>Map Credit: <a className="credit-link" href="https://www.facebook.com/groups/199819667485240/permalink/599052670895269">Alexei Vella</a></p>
        </div>
    )
}

export default MapPage;
