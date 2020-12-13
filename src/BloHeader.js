import React from 'react'
import bolImg from './Images/White-in-Jumper9.png'

function BloHeader() {
    return (
        <div class="container-fluid py-5 my-5  mx-0 px-0">
        <div class="row py-2 mx-0 px-0">
            <div class="col-12 p-0 col-md-6 col-xl-6 d-flex align-items-center align-items-md-start align-items-xl-start  justify-content-center flex-column   ">
                <h1 class="mx-auto mx-md-4 mr-xl-0 ml-xl-5 ml-md-5 text-md-left" style={{fontSize:'3.5rem'}}>I also rarely write some</h1><h1 style={{fontSize:'3.5rem'}} class="ml-0 ml-xl-4 ml-md-4"> <strong>Blogs</strong></h1>
                <p class="py-3  ml-xl-4 ml-md-4 text-md-left" style={{fontSize:'2rem'}}>All the written stuff as archives for the future</p>
            </div>
            <div class="col-12 p-0 col-md-6 col-xl-6 d-flex justify-content-center justify-content-md-end justify-content-xl-end ">
                <img src={bolImg}  class="img-fluid mr-0 mr-xl-0 mr-md-0 hand" />
            </div>
        </div>
    </div>
    )
}

export default BloHeader;
