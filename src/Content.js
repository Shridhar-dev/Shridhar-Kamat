import React from 'react'
import contImg from './Images/Saly-19.png'
function Content() {
    return (
        <div class="py-5 mx-3  mx-md-5 mx-xl-5">
           <div class="row d-flex align-items-center justify-content-center py-5">
                <div class="col-12 col-md-6 col-xl-6  order-1 order-md-12 order-xl-12">
                <h3 class="mx-0 mx-md-5 mx-xl-5 py-5">Hi, I am Shridhar Kamat, I am a tech lover and I like to share my experiences while working with tech also sharing my learnings with others.I am learning about web development specifically front-end develoment(for now).I know HTML,CSS and JavaScript and also love to use React.js.Also, I post some content on my channel</h3>
                </div>
                <div class="col-12 col-md-6 col-xl-6 order-12 order-md-1 order-xl-1">
                <img src={contImg} class="img-fluid" width="482" />
                </div>
           </div>
           
           
        </div>
    )
}

export default Content
