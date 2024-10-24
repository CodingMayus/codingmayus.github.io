import Navbar from '../navbar/navbar.jsx';
import Contact from '../contact/contact.jsx';
import './about.css';
//TODO:
//Codeforces
//DMOJ 
//Strava 
//Wakatime
//Debate
//Thinking
//Problem solving
//API
//community section?  in which i show all my contributions as a team.
//that really is a factor that can't be ignored or put down.
            //Above all, something that applies to all my hobbies is the presence of community.   The experience would never be the same without the help, support, and kindness I have been given.  
            //I dont have to just talk about my hobbies, other things that make me who I am. etc...
            //Philsophy
            //Debating
            //Thinking, etc! 
    //make website more unique, interactive, and cool./
    //make links cooler... they ugly
function Flexer({title, icon,link}){
    return(
        <>
        <div className = 'hobbycontainer'>
            <h2 id = 'hobbytitle'><a className = 'generallink' href = {link}> {title}</a>
           </h2>
           {/* <div className = ''>{icon}</div> */}

        </div>
        </>
    );
}


export default function About(){
return(
<>
<Navbar/>
<h1 id= 'abouttitle'>About Me</h1>
<div className ='aboutdetailscontainer'>
    <div className ='profile'>
    <img src = {require('./me2.jpg')} alt = 'profile' id = 'me'/>
    </div>
<div></div>
<div className = 'abouttext'>  Carrying on from my brief introduction: Hello my name is Matthew Yu from Aurora Canada.  I am currently in High school with aspirations to study Computer Science and Math.
    
I always had big dreams. My primary goal ever since grade 7 was to succeed in Math contests, and now Coding contests, so when I am not busy with running hundreds of kilometers, lifting thousands of pounds, studying for exams, or simply laughing at Instagram Reels, you will find me hard at work to improve my problem solving skills.

Here you can find recent events, my contacts, achievements, my hobbies, my projects, my journey, my life.  I hope you learn something new about me - maybe we can even work together in the future!  
</div>
</div>
<h1 id= 'abouttitle'>Competitive Programming</h1>
<div className ='aboutdetailscontainer'>
<div className ='profile'>
    <img src = {require('./cringe.png')} alt = 'profile' id = 'me'/>
    </div>
<div></div>
<div className = 'abouttext'>  I started competitive programming in grade 9 after learning I was already behind my role-models who started much earlier.  Throughout the process, I learned a lot, had many great memories solving hundreds of problems across multiple online judges.  Every problem is unique and more complex, but that usually means a more clever and interesting way to solve them!  
</div>
<Flexer title = 'DMOJ' link='https://dmoj.ca/user/CodeMayus'/> 
<Flexer title = 'Codeforces' link='https://codeforces.com/profile/CodeMayus'/>
<Flexer title = 'CSES' link='https://cses.fi/user/152930'/>
</div>
<h1 id= 'abouttitle'>Running</h1>
<div className ='aboutdetailscontainer'>
    <div className ='profile'>
    <img src = {require('./race.png')} alt = 'profile' id = 'me'/>
    </div>
<div></div>
<div className = 'abouttext'>  Running has been a big part of my life.  I started Cross Country by chance in grade 3 and from then on have succeeded quite well in many races in elementary.   My main goals in running is trying to get to OFSAA and get fast.  I run everyday, do workouts both on the track and the gym ( thrice a week ), to maintain fitness and strength.  Find me running on Strava by clicking the logo below in the footer, or <a className = 'generallink' href="https://www.strava.com/athletes/109665407" target="_blank" rel="noopener noreferrer">here</a>.
</div>
</div>
<h1 id= 'abouttitle'>Mathematics</h1>
<div className ='aboutdetailscontainer'>
    <div className ='profile'>
    <img src = {require('./imo2014p4.png')} alt = 'profile' id = 'me'/>
    </div>
<div></div>
<div className = 'abouttext'>  I first found out about Math contests in grade 7, and from there I have always been interested in math.   I love the completeness math maintains with proofs, and the interesting and beautiful solutions in hard problems.  Though I aim higher, I have consistently made distinction for most math competitions like the Waterloo contests, American Mathematics Competitions, and the Canadian Open Mathematical Challenge.  Despite not being there yet, I still enjoy learning Olympiad-level math which I find the most interesting.  <a href  ='/math-paper.pdf' className = 'generallink'> Here </a>
  is a math paper I wrote for the International Baccaureate program that rigoriously develops the concept of Barycentric Coordinates to solve International Math Olympiad questions.
</div>
</div>
{/* <Hobby title = 'Math Contests !'/> */}
<Contact/>

</>

);
}