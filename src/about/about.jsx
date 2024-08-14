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

function Demonstration({img}){

    return 
    <>
    <div className = 'demonstrationcontainer'></div>
    
    
    </>
}
function Hobby({title, description,items}){
    return(
        <>
        <div className = 'hobbycontainer'>
            <h2 id = 'hobbytitle'>{title}</h2>
            <div>{description}</div>
            <Demonstration items = {items} />
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

{/* <Hobby title = 'Competitive Programming'/> */}

<Contact/>

</>

);
}