import React from "react";
import mock01 from '../assets/images/Nostra Game jam.jpg';
import mock02 from '../assets/images/Octo Flappy.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.youtube.com/watch?v=XjGv028bBTQ" target="_blank" rel="noreferrer">
                        <img src={mock01} className="zoom" alt="ECHOES OF EVOLUTION" width="100%" />
                    </a>
                    <p>ECHOES OF EVOLUTION:  The player controls a human trapped under a magical spell for
                        millions of years inside a cave. During his long slumber, the planet
                        has evolved into a hostile environment. The human race is extinct,
                        and the ecosystem now presents numerous deadly animals and
                        ruthless climate conditions that his weak immune system cannot
                        handle. Once the spell breaks, the player must undergo evolution to
                        survive, adapting to a world where he is no longer the dominant
                        species.</p>
                </div>
                <div className="project">
                    <a href="https://www.youtube.com/watch?v=9yjXfy5lLi0" target="_blank" rel="noreferrer">
                        <img src={mock02} className="zoom" alt="OCTO FLAPPY" width="100%" />
                    </a>
                    <p>OCTO FLAPPY:  Experience the thrill of navigating an octopus through an underwater obstacle course in this reimagined version of Flappy Bird.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;