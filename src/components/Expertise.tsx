import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Game Development Tools",
    "Game Development & Programming",
    "Technical Art & Game Design Tools",
    //"HTML5",
    //"CSS3",
    //"SASS",
    //"Flask",
   // "Python",
    //"SQL",
    //"PostgreSQL",
    //"Postman"
];

const labelsSecond = [
    "Unreal Engine",
    "Blueprints Visual Scripting",
    "Level Design Tools",
    "Lighting & Material Editor",
    //"Azure",
    //"Linux",
    //"Snowflake",
    //"Pandas",
    //"Selenium",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Game Development & Technical Art</h3>
                        <p>As a passionate game development student, I specialize in creating engaging and interactive game experiences. My knowledge spans across both game design and technical art, with a focus on Unity and Unreal Engine for 3D game development. I have hands-on experience using C# for scripting and building gameplay mechanics, as well as integrating assets for immersive worlds.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>Unreal Engine</h3>
                        <p>I have a strong passion for game development and am constantly exploring new tools and technologies. With Unreal Engine, I’ve gained a solid understanding of level design, Blueprints, and the core tools necessary for creating immersive 3D worlds. I’m excited to continue expanding my skills and leveraging Unreal Engine to bring interactive and dynamic experiences to life.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
