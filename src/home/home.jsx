import Navbar from '../navbar/navbar';
import Contact from '../contact/contact.jsx';
import './home.css';
//  Hello! I am currently a high-school student from Canada interested in Mathematics, Competitive Programming, and other STEM subjects.

//Something about me is: I always had big dreams. In grade 7 it was to succeed in Math contests.  And now in High-school running and coding competitions are of interest as well. So when I am not busy with exams, running, lifting iron, or laughing at Instagram reels, you will find me working hard to improve my problem-solving skills.

//Here you can find recent events, my contacts, achievements, my hobbies, my projects, my journey, my life. Enjoy your stay and welcome to my website!

//TODO: Align Home page.  Its off-center.
import { motion } from "framer-motion";

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


function Introduction() {
  return (
    <section className="intro-section">
      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="intro-text">
          <h1 className="intro-title">MATTHEW YU 101</h1>

          <h3 className="intro-subtitle">
            Math Student • Developer • Runner
          </h3>

          <p className="intro-desc">
            I’m a 17-year-old Math Student at the University of Waterloo.
            I’m passionate about coding, math, and running — and love the
            competitions that push me to give it my all.
          </p>

          <Link to="/about" className="intro-button">
            Get to know me!
          </Link>
        </div>

        <motion.div
          className="intro-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img
            src={require("./meP2.png")}
            alt="Matthew Yu"
          />
        </motion.div>
      </motion.div>
    </section>
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
// function Introduction(){

//     return (
//         <>
//             <div className='aboutcontainer'>
//                 <h1>MATTHEW 101</h1>
//                 <div className='about'>
//                   Hello.  I am a 17 year old Math Student at the University of Waterloo. I am currently investing my time mainly in coding, math, and running — all huge passions of mine.  I love the competitions and the Art of Giving It My All.
//                 </div>
//                 <div id = 'knowmecontainer'>
//                 <div id = 'knowme'>
//                 <Link to='/about' className = 'moreme'>Get to know me! </Link> 
//                 </div>
//                 </div>
      
              
//                 </div>
//         </>
//     );
// }

function Cover(){
      const handleScrollDown = () => {
    const section = document.getElementsByClassName("intro-content");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
    return( <div id='cover'>
        <img></img>
        <div className='title'>
            <h3> Hello👋  I'm </h3>
            <h1 id = 'matthew'>Matthew Yu,</h1>
            <div className ='identity'>
            <h4>
                <span id='math'>Mathematician </span> <span id='coder'> Coder </span> <span id='runner'> Runner </span> <span id='student'> Student</span>
            </h4>
            </div>
          
          
        </div>
        <div className ='scroll-btn-container'>
            <motion.button
        className="scroll-down-btn"
        onClick={handleScrollDown}
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        ↓
      </motion.button>
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