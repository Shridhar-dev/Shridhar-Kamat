import React from 'react'
import proImg from './Images/projImg.png'

function ProHeader() {
    return (
        <div class="container-fluid py-3 my-5">
        <div class="row py-5">
            <div class="col-12 col-md-6 col-xl-6 d-flex align-items-center align-items-md-start align-items-xl-start  justify-content-center flex-column   ">
                <h1 class="mx-auto mx-md-4 mr-xl-0 ml-xl-5 ml-md-5 text-md-left" style={{fontSize:'3.5rem'}}>Check out some of my</h1><h1 style={{fontSize:'3.5rem'}} class="ml-0 ml-xl-4 ml-md-4"> <strong>Projects</strong></h1>
                <p class="py-3  ml-xl-4 ml-md-4 text-md-left" style={{fontSize:'2rem'}}>All the things that I have made in descending
order</p>
            </div>
            <div class="col-12 col-md-6 col-xl-6 d-flex justify-content-center justify-content-md-end justify-content-xl-end ">
                <img src={proImg}  class="img-fluid mr-0 mr-xl-4 mr-md-4" />
            </div>
        </div>
    </div>
    )
}

export default ProHeader;
