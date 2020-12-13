import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill={props.icolor} xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/" style={{color:props.icolor}}>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/projects" style={{color:props.icolor}}>Projects</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blogs" style={{color:props.icolor}}>Blogs</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
