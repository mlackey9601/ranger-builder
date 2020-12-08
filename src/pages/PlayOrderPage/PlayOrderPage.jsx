import './PlayOrderPage.css';
import React from 'react';

const PlayOrderPage = () => {
  return (
    <div className="PlayOrderPage">
        <header className="playorder-heading">Play Order</header>
        &nbsp;&nbsp;&nbsp;
        <div className="playorder-container">
            <div>
                <img className="playorder-img" alt="temple guard" src="https://i.imgur.com/vS1FefD.jpg"></img>
            </div>
            <div className="text-container">
                <p className="playorder-intro">
                    Below is the recommended play order for all of the supplements for Rangers of the Shadow Deep as recommended by Joseph McCullough <a className="link" href="https://www.facebook.com/groups/199819667485240/permalink/665850730882129">here</a>.
                </p>
                <div className="supplement-card">
                    <div className="supplement-title">
                        Blood Moon
                    </div>
                    <div className="level">
                        Any Level
                    </div>
                    <div className="description">
                        Werewolves
                    </div>
                </div>
                <div className="supplement-card">
                    <div className="supplement-title">
                        Burning Light
                    </div>
                    <div className="level">
                        1 - 5
                    </div>
                    <div className="description">
                        The Convent of St. Emilia has been overrun by the Shadow Deep and the Rangers are sent in to investigate.
                    </div>
                </div>
                <div className="supplement-card">
                    <div className="supplement-title">
                        Temple of Madness
                    </div>
                    <div className="level">
                        5 - 15
                    </div>
                    <div className="description">
                        Cultist Temple Magic
                    </div>
                </div>
                <div className="supplement-card">
                    <div className="supplement-title">
                        Ghost Stone
                    </div>
                    <div className="level">
                        10 - 15
                    </div>
                    <div className="description">
                        Gnolls
                    </div>
                </div>
                <div className="supplement-card">
                    <div className="supplement-title">
                        Incinerator
                    </div>
                    <div className="level">
                        Any Level
                    </div>
                    <div className="description">
                        Captured
                    </div>
                </div>
                <div className="supplement-card">
                    <div className="supplement-title">
                        Across the Wastes
                    </div>
                    <div className="level">
                        10+
                    </div>
                    <div className="description">
                        Into the desert
                    </div>
                </div>
                <div className="supplement-card">
                    <div className="supplement-title">
                        Menagerie
                    </div>
                    <div className="level">
                        Any Level
                    </div>
                    <div className="description">
                        Animal Companions
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default PlayOrderPage;
