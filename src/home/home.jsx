import Navbar from '../navbar/navbar';
import Contact from '../contact/contact.jsx';
import './home.css';
//  Hello! I am currently a high-school student from Canada interested in Mathematics, Competitive Programming, and other STEM subjects.

//Something about me is: I always had big dreams. In grade 7 it was to succeed in Math contests.  And now in High-school running and coding competitions are of interest as well. So when I am not busy with exams, running, lifting iron, or laughing at Instagram reels, you will find me working hard to improve my problem-solving skills.

//Here you can find recent events, my contacts, achievements, my hobbies, my projects, my journey, my life. Enjoy your stay and welcome to my website!

//TODO: Align Home page.  Its off-center.

import {Link} from 'react-router-dom';
function CompetitiveCoding(){
    //TODO: API call for each online judge.
}
function Project(){

        return (
<>
<div className = 'imgcontainer'>
    <img src = {require('./me.webp')}/> 
    </div>
</>
        );

}
function Projects({img, title, description}){

    return(
<>
<div className = 'projectcontainer'>
   <Project/>
</div>
</>

    );
}
function TechStack()
{

    return (

        <>
        
        </>
    )
}
function Introduction(){

    return (
        <>
            <div className='aboutcontainer'>
                <h1>MATTHEW 101</h1>
                <div className='about'>
                  Hello.  I am a 17 year old Math Student at the University of Waterloo. I am currently investing my time mainly in coding, math, and running — all huge passions of mine.  I love the competitions and the Art of Giving It My All.
                </div>
                <div id = 'knowmecontainer'>
                <div id = 'knowme'>
                <Link to='/about' className = 'moreme'>Get to know me! </Link> 
                </div>
                </div>
      
              
                </div>
        </>
    );
}

function Cover(){
    return( <div id='cover'>
        <img></img>
        <div className='title'>
            <h3> Hello ! My name is </h3>
            <h1 id = 'matthew'>Matthew Yu</h1>
            <div className ='identity'>
            <h4>
                <span id='math'>Mathematician </span> <span id='coder'> Coder </span> <span id='runner'> Runner </span> <span id='student'> Student</span>
            </h4>
            </div>
          
        </div>
    </div>);
   
}
export default function Home(){
    return (
        <>
            <Navbar/>
            <Cover />
            <Introduction />
            {/* <Projects/> */}
            <Contact/>
        </>
    );
}