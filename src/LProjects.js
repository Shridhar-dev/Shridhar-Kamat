import React from 'react'
import LPImg from './Images/Saly-10.png'
import Discord from './Images/Discord.png'
import Twitter from './Images/twitter.png'
import Discreet from './Images/DISCREET.png'
function LProjects() {
    return (
        <div class="container-fluid py-5">
            <div class="row ">
                
                <div class="col-12 col-md-6 col-xl-6 d-flex align-items-center justify-content-center">
                    <img src={LPImg} class="img-fluid" />
                </div>
                <div class="col-12 col-md-6 col-xl-6 d-flex align-items-center justify-content-center flex-column  ">
                    <div class="row">
                        <div class="col-12 pt-5 pb-3">
                    <h1 style={{fontSize:'4rem'}}>Latest </h1><h1 style={{fontSize:'4rem'}}> <strong>Projects</strong></h1>
                   
                    </div>
                    <div class="col-12 d-flex justify-content-center px-0 px-sm-5 px-md-5 px-xl-5 py-5">
                    <div id="carouselExampleIndicators" class="carousel slide container px-z px-sm-5 px-md-5 px-xl-5" data-bs-ride="carousel" >
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <a href="https://disord-clone.netlify.app/" target="_blank" ><img src={Discord} class="d-block img-fluid " alt="..."/></a>
    </div>
    <div class="carousel-item">
    <a href="https://twitter-clone-af477.web.app/" target="_blank" > <img src={Twitter} class="d-block img-fluid " alt="..."/></a>
    </div>
    <div class="carousel-item">
    <a href="https://discreet-b6d33.web.app/" target="_blank" >  <img src={Discreet} class="d-block img-fluid" alt="..."/></a>
    </div>
  </div>
 
</div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            
      
    )
}

export default LProjects