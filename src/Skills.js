import React from 'react'
import ProgressBar from './ProgressBar'
import Phone from './Images/Saly-12.png'
import JSL from './Images/jsl.png'
import CSL from './Images/csl.png'
import HSL from './Images/hsl.png'
import BL from './Images/bl.png'
import fire from './Images/firebase.png'
import react from './Images/react.png'
import './Skills.css'
function Skills() {
    return (
        <div class="container-fluid scroll-skill py-5">
            <h1 style={{fontSize:'4rem'}}>Skills</h1>
            <div class="">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-12 col-md-6 col-xl-6">
                        <img src={Phone} class="img-fluid"/>
                    </div>
                    <div class="col-12 col-md-6 col-xl-6" style={{maxHeight:'25rem',overflowY:'auto'}}>
                <ProgressBar skillImg={HSL} skill="HTML" />
                <ProgressBar skillImg={CSL} skill="CSS" />
                <ProgressBar skillImg={JSL} skill="JS" />
                <ProgressBar skillImg={react} skill="React"/>
                <ProgressBar skillImg={BL} skill="Bootstrap"/>
                <ProgressBar skillImg={fire} skill="Firebase"/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Skills
