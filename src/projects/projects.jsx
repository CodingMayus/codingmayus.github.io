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
import biasbuster from './biasbuster1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub, faInstagram, faStrava, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from "@fortawesome/free-solid-svg-icons"; 

import philos from './Philos.png'
import koicash from './betterkoicash.png';
import intouch from './Intouch.png';
import yourlegacy from './yourlegacy.png';
import blenderlegacy from './blenderyourlegacy.png';
//add more details and ways for the user to learn more ( devposts, live demos, etc...)

// function Project({img, title, description, link}){
//     // console.log(img);
//     // console.log(img.width);
//     // console.log(img.height);
// return (
//     <>
//         <div className='project'>
//             {/* <img src={img} alt={title} onLoad={(e) => {
//                 const image = e.target;
//                 const layer = image.nextSibling;
//                 console.log(image.width);
//                 console.log(image.height);
//                 layer.style.width = `${image.width}px`;
//                 layer.style.height = `${image.height}px`;
//                 // layer.style.top = `${image.height}px`;
//             }} /> */}
//             <img src={img } alt={title} />
//             <div className = 'layer' style={{backgroundColor:'black'}}>
//                 <div id = 'contents'>
//                 <h2>{title}</h2>
//                 <div className ='desc'>{description}</div>
//                 <div className = 'link'><a href={link} style = {{color:'white'}}><FontAwesomeIcon icon = {faGithub}/></a></div>
//                 </div>
//             </div>
//         </div>
//     </>
// );
// }


//TODO:
//
// Eventually add the technologies used in each project.

//
function Project({ img, title, description, link }) {
  // Allow either a single string or an array of links
  const links = Array.isArray(link) ? link : [link];

  // Choose icon based on URL
  const getIconForLink = (url) => {
    if (url.includes("github.com")) return faGithub;
    if (url.includes("youtube.com") || url.includes("youtu.be")) return faYoutube;

    return faLink;
  };

  return (
    <>
      <div className="project">
        <img src={img} alt={title} />
        <div className="layer" style={{ backgroundColor: "black" }}>
          <div id="contents">
            <h2>{title}</h2>
            <div className="desc">{description}</div>

            <div className="link">
              {links.map((url, i) => {
                const icon = getIconForLink(url);
                return (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", margin: "0 10px" }}
                  >
                    {icon.custom ? (
                      <img
                        src={icon.custom}
                        alt="Devpost"
                        style={{
                          width: "20px",
                          height: "20px",
                          verticalAlign: "middle",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon icon={icon} size="lg" />
                    )}
                  </a>
                );
              })}
            </div>
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

<div className = 'title'><h1>A Sneak Peek Into My Projects</h1></div>
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
            <Project  img = {blenderlegacy} title = 'Your Legacy'  description = '[WORK-IN-PROGRESS] First Person Shooter game on Roblox made from scratch— inspired by Apex Legends lore, weapons, movements, and the Gunter community on ROBLOX.  Climb the tower( once i add it lol ). Achieve your dreams. Prove you are the best. Cement your legacy. The Youtube video is a bit outdated but its a good overview of the project.' link = {['https://youtu.be/4w_BFsBVcmY','https://www.roblox.com/games/84359489111907/Your-Legacy']} />
            <Project img = {workstation} title = 'Focus Friend' description = 'At Hack the 6ix, we used React Native + Expo, arduinos, operational amplifiers, etc... to create an electroencephalogram ( EEG ) to determine if one is focused or not.' link = {['https://github.com/Yourself1011/focus-friend','https://devpost.com/software/car-buddy-qs3khl?ref_content=my-projects-tab&ref_feature=my_projects']}/>
            <Project img = {koicash} title = 'KoiCash' description = 'KoiCash or "Coy" Cash ( get it ), is personal finance app that acts as a fully secure financial advisor to achieve your financial dreams. Homemade authentication system :D.' link = {['https://github.com/CodingMayus/KoiCash', 'https://www.youtube.com/watch?time_continue=34&v=AOwKdgCI5BA&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=MjM4NTE','https://devpost.com/software/koi-cash']}/>
            <Project img  ={lemniscate} title = 'Lemniscate' description = 'A collaborative note-taking website utilizing famous, organized note-taking templates.' link ={['https://github.com/CodingMayus/lemniscate', 'https://lemniscate-psi.vercel.app/']}/>
            <Project img = {mentalhealth} title = 'Mental Health App' description = 'Accessing OpenAPI to create a friend you can talk to.' link={['https://github.com/CodingMayus/Mental-Health-PSA','https://matthewyu.tech/Mental-Health-PSA/']}/>
            <Project img = {placeholderchecklist} title = 'Checklist Chrome Extension'description = 'Using Chrome.Storage API to create a personal TODO list.' link = 'https://github.com/CodingMayus/Check-List'/>
            </div>
            <div className =  'column'>
            <Project img = {intouch} title  = "InTouch" description = 'Cold Emails? NAH we give warm ones 👍  InTouch creates, personalises, and pushes outreach content for businesses based on real-time data.' link = {['https://github.com/VincentQu888/InTouch/tree/main', 'https://devpost.com/software/intouch-0fp1i5?ref_content=my-projects-tab&ref_feature=my_projects']}/>
            <Project img = {biasbuster} title = 'Bias Buster' description = 'BiasBuster shows the newest generation (gen alpha) the unbiased news and the various biases that take place on a comedic and educational level.' link = {['https://github.com/CodingMayus/Bias-Buster', 'https://www.youtube.com/watch?v=GIRuz1WxifE','https://dorahacks.io/buidl/21745']}/>
            <Project img = {philos} title ='Philos' description = "Philos, greek for friend, is an actual 3D friend that you can talk to, reactions and all. It analyzes your facial expressions and remembers them, along with conversations, the immersion is completed with different animations accompanying different actions or emotions the robot feels.  Theres also an cookie-based authentication system I made from scratch!" link = {['https://github.com/CodingMayus/philos', 'https://www.youtube.com/watch?v=rGQ0JNtqJf8','https://dorahacks.io/buidl/26376']}/>
            <Project img = {debg} title = 'Design Project' description = 'In the SHAD program, we came up with a solution to a specific part of the Green Energy issue affecting Youth.' link = {['https://github.com/viridis-expo/viridis-expo.github.io', 'https://viridis-expo.github.io/#/']}/>
            <Project img = {PTC} title = 'Sea Debris Ocean Promotion' description = ' Using Leaflet Js as a medium, predict where ocean trash will likely end up on a map.' link = {['https://github.com/CodingMayus/PTC', 'https://codingmayus.github.io/PTC']}/>
            <Project img  ={miliblock} title = 'Miliblock' description  = 'Personalizable website blocker chrome extension that motivates you. ' link = {['https://github.com/CodingMayus/chrome-extension', 'https://chromewebstore.google.com/detail/miliblock/pdjipgdhjcjbhjbnkopidgknnahhgean?authuser=0&hl=en']}/>
            </div>
            </div>


</>);

}