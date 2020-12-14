import React from 'react'

function ProgressBar(props) {
    return (
        <div class="px-0 px-md-5 px-xl-5 py-3">
        <div class='row d-flex align-items-center px-5'>
            <div class="col-3 col-md-2 col-xl-2 d-xl-block d-md-block d-none ">
                <img src={props.skillImg} class="img-fluid" width="100" />
            </div>
            <div class="col-12 col-md-10 col-xl-10">
                <div class="progress" style={{height:'2.2rem'}}>
                    <div class="progress-bar " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%',backgroundColor:'rgb(208,156,122)'}}><p class="d-block d-md-none d-xl-none m-0 p-0">{props.skill}</p></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProgressBar
