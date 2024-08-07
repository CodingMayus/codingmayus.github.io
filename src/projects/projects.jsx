import Navbar from '../navbar/navbar.jsx';
import Contact from '../contact/contact.jsx';
import './projects.css';
import lemniscate from './lemniscate.png';
import mentalhealth from './mentalhealth.png';
import placeholderchecklist from './placeholderchecklist.png';
import PTC from './PTC.png';
import miliblock from './miliblock.png';
import debg from './DEbackground.png';
import workstation from './workstation.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub, faInstagram, faStrava } from '@fortawesome/free-brands-svg-icons';

function Project({img, title, description, link}){
    // console.log(img);
    // console.log(img.width);
    // console.log(img.height);
return (
    <>
        <div className='project'>
            {/* <img src={img} alt={title} onLoad={(e) => {
                const image = e.target;
                const layer = image.nextSibling;
                console.log(image.width);
                console.log(image.height);
                layer.style.width = `${image.width}px`;
                layer.style.height = `${image.height}px`;
                // layer.style.top = `${image.height}px`;
            }} /> */}
            <img src={img } alt={title} />
            <div className = 'layer' style={{backgroundColor:'black'}}>
                <div id = 'contents'>
                <h2>{title}</h2>
                <div className ='desc'>{description}</div>
                <div className = 'link'><a href={link} style = {{color:'white'}}><FontAwesomeIcon icon = {faGithub}/></a></div>
                </div>
            </div>
        </div>
    </>
);
}
export default function Projects(){

return (
<>
<Navbar/>

<div className = 'title'><h1>My Projects</h1></div>
<Contact/>
        {/* <Project imgg = '../projects/PTC.png' title = 'Sea Debris Ocean Promotion'/> */}
            {/*chronological order*/}
    <div className ='projectcontainer'>
        {/* <div className = 'column'>
        <img src = {require('./lemniscate.png')} alt = 'placeholder' className='project'/>
        <img src = {require('./mentalhealth.png')} alt = 'placeholder' className='project'/>
        <img src = {require('./placeholderchecklist.png')} alt = 'placeholder' className='project'/>
        </div>
        <div className = 'column'>
        <img src = {require('./PTC.png')} alt = 'Sea Debris Ocean Promotion' className='project'/>
        <img src = {require('./miliblock.png')} alt = 'placeholder' className='project'/>

            </div> */}
            <div className = 'column'>
            <Project img = {workstation} title = 'Focus Friend' description = 'At Hack the 6ix, we used React Native + Expo, arduinos, operational amplifiers, etc... to create an electroencephalogram ( EEG ) to determine if one is focused or not.' link = 'https://github.com/Yourself1011/focus-friend'/>
            <Project img  ={lemniscate} title = 'Lemniscate' description = 'A collaborative note-taking website utilizing famous, organized note-taking templates.' link ='https://github.com/CodingMayus/lemniscate'/>
            <Project img = {mentalhealth} title = 'Mental Health App' description = 'Accessing OpenAPI to create a friend you can talk to.' link='https://github.com/CodingMayus/Mental-Health-PSA'/>
            <Project img = {placeholderchecklist} title = 'Checklist Chrome Extension'description = 'Using Chrome.Storage API to create a personal TODO list.' link = 'https://github.com/CodingMayus/Check-List'/>
         
            </div>
            <div className =  'column'>
            <Project img = {debg} title = 'Design Project' description = 'In the SHAD program, we came up with a solution to a specific part of the Green Energy issue affecting Youth.' link = 'https://github.com/viridis-expo/viridis-expo.github.io'/>
            <Project img = {PTC} title = 'Sea Debris Ocean Promotion' description = ' Using Leaflet Js as a medium, predict where ocean trash will likely end up on a map.' link = 'https://github.com/CodingMayus/PTC'/>
            <Project img  ={miliblock} title = 'Miliblock' description  = 'Personalizable website blocker chrome extension that motivates you. ' link = 'https://github.com/CodingMayus/chrome-extension'/>

            </div>
            </div>


</>);

}