import './AboutPage.css';
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
            <p className="about-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b className="W">W</b>hen I first began playing <b><i>Rangers of the Shadow Deep</i></b>, I found myself immersed in a world that Joseph McCullough had created, but also one that he'd allowed me to <i>participate in</i>.  To me, that's what makes playing his games so fun.  He truly sets you up to be a co-creator.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So, as I ventured into the Shadow Deep, fending off foul beasts, searching for clues, and rescuing survivors, I constantly found myself flipping back and forth to various points in my book to reference important pages.  At first, this was made easier by the addition of sticky tabs, but it didn't solve my other problem: erasing.  I did <i>a lot</i> of erasing.  It seemed like with every phase of the game there was something new to put in my notes, damage to tabulate, or a new item to carry. As the constitution of the paper beneath my "Current Health" began to wain, I thought, "There has to be another way..."  I looked online for Reference and Ranger Sheets I could use, but none of them really fit the bill.  I wanted it to be <i>much easier</i>.<br></br>  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a web developer, it was natural for me to turn to that for what I needed.  The result is what you see here.  It took hours of hard work and sleepless nights.  My main hope for this application is that it <i>adds</i> to the game and never <i>takes away</i>.  This is meant to be a supplement, a tribute, and never a replacement for good old fashioned pencil, paper, and imagination.</p>
            <div className="img-container">
              <img className="signature" alt="signature" src="https://i.imgur.com/oW5EUNm.png"></img>
            </div>
          </div>
        </div>
    </div>
  )
}
 
export default AboutPage;
