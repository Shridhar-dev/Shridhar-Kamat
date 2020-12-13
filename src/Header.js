import React from 'react'
import headImg from './Images/Saly-13.png'
function Header() {
    return (
        <div class="container-fluid py-3">
            <div class="row">
                <div class="col-12 col-md-6 col-xl-6 d-flex align-items-center align-items-md-start align-items-xl-start  justify-content-center flex-column   ">
                <h1 class="ml-xl-4 ml-md-4 text-md-left" style={{fontSize:'4rem'}}>Hey there 👋,</h1><h1 style={{fontSize:'4rem'}} class="ml-xl-4 ml-md-4 text-md-left"> I am  <strong>Shridhar Kamat</strong></h1>
                    <p class="py-3  ml-xl-4 ml-md-4 text-md-left" style={{fontSize:'2rem'}}>Learning web development</p>
                </div>
                <div class="col-12 col-md-6 col-xl-6 d-flex justify-content-center justify-content-md-end justify-content-xl-end ">
                    <img src={headImg} width='482' class="img-fluid mr-0 mr-xl-4 mr-md-4" />
                </div>
            </div>
        </div>
    )
}

export default Header
