import React from 'react';
import Project from '../Project';
import pethub from '../../images/pethub.png'
import weather from '../../images/weather.png'
import planner from '../../images/planner.png'
import teamGen from '../../images/team.gif'
import pass from '../../images/pass.png'
import ecommerce from '../../images/ecommerce.gif'

function Projects() {
    return (
        <section id="projects">
            <div className="w-full bg-base-200 shadow-xl m-auto">
                <div className="card-body w-5/6 m-auto">
                    <h2 className="text-3xl">Projects: </h2>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-around">
                        <Project imgPreview={ecommerce} name="E-commerce Back-end" repoLink="https://github.com/KrystopherQ/crispy-doodle" deployedLink="https://github.com/KrystopherQ/crispy-doodle"/>
                        <Project imgPreview={pethub} name="Pethub" repoLink="https://github.com/KrystopherQ/pethub" deployedLink="https://krystopherq.github.io/pethub/" />
                        <Project imgPreview={pass} name="Password Generator" repoLink="https://github.com/KrystopherQ/Greatest-Generator" deployedLink="https://krystopherq.github.io/Greatest-Generator"/>
                        <Project imgPreview={weather} name="Weather Dashboard" repoLink="https://github.com/KrystopherQ/KQSWA" deployedLink="https://krystopherq.github.io/KQSWA/" />
                        <Project imgPreview={teamGen} name="Team Generator" repoLink="https://github.com/KrystopherQ/TPG-numbero1" deployedLink="https://github.com/KrystopherQ/TPG-numbero1"/>
                        <Project imgPreview={planner} name="Planner" repoLink="https://github.com/KrystopherQ/Work-Planner" deployedLink="https://krystopherq.github.io/Work-Planner/" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;