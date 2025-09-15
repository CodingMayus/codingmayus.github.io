import Navbar from '../navbar/navbar.jsx';
import Contact from '../contact/contact.jsx';
// import Link from "react"
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
    <img src = {require('./fancyme.jpg')}  alt = 'profile' id = 'me' className = "aboutimg"/>
    </div>
<div></div>
<div className = 'abouttext'>  Carrying on from my brief introduction: Hello my name is Matthew Yu from Aurora Canada.  I am currently in High school with aspirations to study Computer Science and Math.
    
I always had big dreams. My primary goal ever since grade 7 was to succeed in Math contests, and now Coding contests, so when I am not busy with running hundreds of kilometers, lifting thousands of pounds, studying for exams, or simply laughing at Instagram Reels, you will find me hard at work to improve my problem solving skills.
In this website, you can find recent events, my contacts, achievements, my hobbies, my projects, my journey, my life.  I hope you learn something new about me - maybe we can even work together in the future!  
<div>
</div>
 Check out my <a className = "outsiderlink" href = "https://codingmayus.github.io/#/mythoughts">blog</a> to get a deeper look into my thoughts or simply scroll below to see my interests. 
</div>
<div></div>
</div>
<h1 id= 'abouttitle'>Competitive Programming</h1>
<div className ='aboutdetailscontainer'>
<div className ='profile'>
    <img src = {require('./cringe.png')}  alt = 'profile' id = 'codycody' className = "aboutimg"/>
    </div>
<div></div>
<div className = 'abouttext'>  I started competitive programming in grade 9 after learning I was already behind my role-models who started much earlier.  Throughout the process, I learned a lot and made many great memories solving hundreds of problems across multiple online judges.  Most questions were unique and different from math questions, but that also meant the solutions were just as interesting.  My goal is to become a grandmaster one day.  I recorded some live streams and videos that showed a small part of the journey.  Feel free to check them out <a className = 'generallink' href="https://www.youtube.com/@knowmayus/featured" text-decorations ="none">here</a>!
</div>
<Flexer title = 'DMOJ - Top 700' link='https://dmoj.ca/user/CodeMayus'/> 
<Flexer title = 'Codeforces - Pupil' link='https://codeforces.com/profile/CodeMayus'/>
<Flexer title = 'CSES - ~50/300 ( tryna solve them all tho )' link='https://cses.fi/user/152930'/>
</div>
<h1 id= 'abouttitle'>Running</h1>
<div className ='aboutdetailscontainer'>
    <div className ='profile'>
    <img src = {require('./running.jpg')} alt = 'profile' id = 'me' className = "aboutimg"/>
    </div>
<div></div>
<div className = 'abouttext'>  Running has been a big part of my life.  I started Cross Country by chance in grade 3 and from then on have succeeded quite well in many races throughout elementary.   My main goal in running has always been to get to OFSAA which means to get faster.  I run everyday, do workouts both on the track and the gym ( thrice a week ), to maintain fitness and strength.  You can track my progress on Strava — which can be accessed by clicking the corresponding logo below in the footer, or <a className = 'generallink' href="https://www.strava.com/athletes/109665407" target="_blank" rel="noopener noreferrer">here</a>.
</div>
</div>
<h1 id= 'abouttitle'>Mathematics</h1>
<div className ='aboutdetailscontainer'>
    <div className ='profile'>
    <img src = {require('./imo2014p4.png')} alt = 'profile' id = 'mathymathmath' className = "aboutimg"/>
    </div>
<div></div>
<div className = 'abouttext'>  I first found out about Math contests in grade 7, and from there I have always been interested in math.   I love the completeness math maintains with proofs, and the interesting and beautiful solutions in hard problems.  Though I aim higher, I have consistently made distinction for most math competitions like the Waterloo contests, American Mathematics Competitions, and the Canadian Open Mathematical Challenge.  Despite not being there yet, I still enjoy learning Olympiad-level math which I find the most interesting.  <a href  ='/math-paper.pdf' className = 'generallink'> Here </a>
  is a math paper I wrote for the International Baccaureate program that rigoriously develops the concept of Barycentric Coordinates to solve International Math Olympiad questions.
</div>
</div>
<h1 id = 'abouttitle'>Operational Research</h1>
<div className ='aboutdetailscontainer'>
    <div className ='profile'>
    {/* <img src = {require('./debate.png')} alt = 'profile' id = 'me'/> */}
    </div>
<div></div>
<div className = "profile">
<img src = {require('./500citytour.png')} alt = 'profile' id = 'tsp'  className = "aboutimg"/>
</div>
<div className = 'abouttext'> 
One of the main reasons I stayed in the IB program is the opportunity to write research papers in various subjects. The penultimate paper is the Extended Essay, a paper written over the two years of the IB program.

I used this opportunity to explore the intersection of my interests in the optimization and efficiency of competitive programming and the rigor of mathematics to pursue solutions to the "Traveling Salesman Problem," a problem with inspiring implications if a suitably fast solution is found. For those curious, the problem is simple to state: What is the shortest path from a given starting node to visit every node exactly once in a complete graph before returning to the starting node? I highly recommend the books and resources curated by William Cook, a leader in the field.  Looking back, the clear explanations and the frequent reminders of the importance and implications of the problem really made the experience enjoyable.

A cool fact is, although I had interest in the problem for a year at that point, the paper itself took a week to write: <a href ="/extended_essay.pdf" className ="generallink"> Here's</a> the paper.  I was going to implement the algorithm myself only to realize the current best modern exact algorithm solvers had over 100,000 lines of code and considering the 4000-word limit, it was not right to leave out so many details.  Instead, the paper explored the main ideas behind the forerunners of the problem, those who chose to "bash on regardless," to bash their way to a sufficiently fast <strong>exact</strong> algorithm for the TSP, and those who chose to forego some degree of accuracy to create applicability to the everyday person.  
</div>
</div>
{/* <Hobby title = 'Math Contests !'/> */}
<Contact/>

</>

);
}