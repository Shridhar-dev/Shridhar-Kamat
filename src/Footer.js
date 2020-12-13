import React from 'react'
import Cycle from './Images/Saly-5.png'
function Footer(props) {
    return (
        <div class="container-fluid  m-0 p-0 " >
            <div class="" style={{marginTop:'5rem'}}>
                <div class="row p-0 m-0">
                    <div class="col-12 col-md-6 col-xl-6 offset-0 offset-md-6 offset-xl-6 mb-5 mb-md-0 mb-xl-0" style={{height:'25rem'}}>
                   <div class="mt-0 mt-md-5 mt-xl-5 mb-5 mb-md-0 mb-xl-0 " style={{color:props.bg}}>
                    <h1 class="m-0 p-0 pb-5 mt-0 mt-md-5 mt-xl-5" style={{fontSize:'4rem'}}>Join our <strike>cult</strike> family </h1>
                   <a href="https://twitter.com/shridhar_kdev"> <i class="fab fa-twitter mx-3" style={{fontSize:'4rem'}}></i></a>
                   <a href="https://www.youtube.com/channel/UCv2hTdClW8560n89OZ6cazA?view_as=subscriber"> <i class="fab fa-youtube mx-3" style={{fontSize:'4rem'}}></i></a>
                   <a href="https://github.com/Shridhar-dev"> <i class="fab fa-github mx-3" style={{fontSize:'4rem'}}></i></a>
                   <a href="https://www.linkedin.com/in/shridhar-kamat-1015a41bb/" style={{textDecoration:'none'}}> <i class="fab fa-linkedin mx-3" style={{fontSize:'4rem'}}></i></a>
                    </div>
                    </div>
                </div>
            <div class="container-fluid m-0 pt-5" style={{backgroundColor:props.bg,height:'15rem',position:'relative'}}>
                <div class="row">
                <div class="col-12 col-md-6 col-xl-6" style={{position:'relative'}}>
                &nbsp;
                    <img src={Cycle} class="img-fluid" style={{position:'absolute',bottom:'-300%',left:'0%'}}/>
                </div>
                <div class="col-12 col-md-6 col-xl-6">
                &nbsp;
                </div>
                </div>
                <p style={{color:props.icolor,position:'absolute',bottom:10,left:'25%',right:'25%'}}>Copyright © 2020 Shridhar Kamat. All rights reserved.</p>
            </div>
            </div>
        </div>
    )
}

export default Footer
