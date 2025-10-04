import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';
// function Links({color,to,name}){
//     const linkstyle={
//         hover:{
//             color: {color}
//         }
//     }
//     return (
//         <div className='features'>
//         <Link to={'/'+{to}} className = 'link' style={linkstyle.hover
//         }>{name}</Link>
//     </div>
//     );
// }
export default function Navbar() {
    const [on,setOn]=useState(true);
   function handleClick(){
        setOn(!on);
    }
    return (
   <>
<img className='shrinkbutton' src={require('./menuicon.png')} onClick = {handleClick}/> 
               <div className = 'navbar' style = {{
transition:'transform 1s ease',
transform: on ? 'translateX(0px)' : 'translateX(-300vw)'}}>
  <div className = 'feature'></div>
    <div id='name'>
<Link to ='/' className = 'link1'>Matthew Yu</Link>
</div>

<div className ='feature'>
<Link to='/about' className = 'link2'>About</Link>
</div>
<div className='feature'>
<Link to ='/projects' className = 'link3'>Projects</Link>
</div>
<div className='feature'>
    <a href  ='/matthewresume.pdf' className = 'link4'>Resume</a>
    
{/*Link to couldve worked with browserrouting at least since im using hashrouting it messes things up.*/ }
</div>
<div className = 'feature'>
<Link to ='/mythoughts' className = 'link4'>Thoughts</Link>
</div>
{/* <div className='feature'>
<Link to='/contact' className = 'link5'>Contact</Link>
</div> */}

</div>

   </>
         
        
    
     
    );
}
