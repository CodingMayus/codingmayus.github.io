import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub, faInstagram, faStrava } from '@fortawesome/free-brands-svg-icons';
import './contact.css';
import Navbar from '../navbar/navbar.jsx';

export default function Contact(){

return (
    <>
        <div className="contactcontainer">
            <a href="https://www.github.com/codingmayus">
                <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a href="mailto:matthew_yu85@outlook.com">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/matthewyuu">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a href="https://www.instagram.com/knowmayus_/">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a href="https://www.strava.com/athletes/109665407">
                <FontAwesomeIcon icon={faStrava} className="icon" />
                </a>
        </div>
    </>
);
}