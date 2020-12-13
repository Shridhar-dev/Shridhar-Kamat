import React from 'react'
import Rocket from './Images/Saly-1.png'
import './Support.css'
function Support() {
    return (
        <div class="container-fluid py-5 mb-5">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-12 col-md-6 col-xl-6 order-1 order-md-12 order-xl-12">
                    <h1 class="m-0 p-0 mt-5 mb-4" style={{fontSize:'4rem'}}>Like My Work </h1><h1 class="m-0 p-0 mb-5" style={{fontSize:'4rem'}}><strong> Support Me </strong></h1>
                    <a class="bmc-button py-5" target="_blank" href="https://www.buymeacoffee.com/shridharkamat"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a Coffee" /><span style={{marginLeft:'15px',fontSize:'19px'}}>Buy me a Coffee</span></a>

                </div>
                <div class="col-12 col-md-6 col-xl-6 order-12 order-md-1 order-xl-1">
                    <img src={Rocket} class="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Support
