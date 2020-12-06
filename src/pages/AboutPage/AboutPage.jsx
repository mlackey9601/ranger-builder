import './AboutPage.css'
import React from 'react';

const AboutPage = () => {
  return (
    <div className="AboutPage">
        <header className="about-heading">About</header>
        &nbsp;&nbsp;&nbsp;
        <div className="about-container">
          <div>
            <img className="about-img" alt="weapons" src="https://i.imgur.com/jsIbH58.jpg"></img>
          </div>
          <div className="article">
            <p className="about-text"><b className="W">W</b>hen I first began playing <b><i>Rangers of the Shadow Deep</i></b>, I found myself immersed in the world that Joseph McCullough had created, but also one that he'd allowed me to participate in creating.  To me, that's what makes playing his games so fun.  So as my brother-in-law and I traversed our way into the Shadow Deep, fending off foul beasts, searching for clues, and rescuing survivors; we constantly found ourselves flipping back and forth to various points in our book.  Now at first, this was made easier by the addition of sticky tabs, but it didn't solve our other problem: erasing; and we did <i>a lot</i> of erasing.  It seemed like every phase of the game there was something new to put in our notes, damage to tabulate, or a new shiny item to carry. As the integrity of the paper beneath my "Current Health" began to wain, I thought, "There has to be another way."  I looked online and in the RotSD Facebook community for Ranger Sheets we could use, but none of them really fit the bill.  I wanted it to be <i>easier</i>. As a web developer by trade, it was natural for me to lean into that for my what we needed.  The result is what you see here.  It took hours and hours of work.  My main hope for this application is that it <i>adds</i> to the game and never takes away.  This is meant to be a supplement, and never a replacement for good old fashioned pencil and paper.</p>
            <div className="img-container">
              <img className="signature" alt="signature" src="https://i.imgur.com/oW5EUNm.png"></img>
            </div>
          </div>
        </div>
    </div>
  )
}
 
export default AboutPage;
