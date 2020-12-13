import React from 'react'

import './Item.css'
function Item(props) {
    return (
        <div class="col-12 col-md-6 col-xl-4 my-4 " >
            <a href={props.url} target="_blank">
            <div class="pro-img-div d-flex justify-content-center align-items-center flex-column" style={{color:props.icolor,backgroundColor:'transparent'}}>
                <div  class="mx-5 ">
                <h2 class="mb-3 mx-auto">{props.heading}</h2>
                <p class="mx-auto">{props.text}</p>
                </div>
                
            <img src={props.img} class="img-fluid pro-img" width="400" alt="..." style={{border:'1px solid white'}}/>
            
            </div>
            </a>
        </div>
    )
}

export default Item
