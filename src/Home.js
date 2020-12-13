import React,{useContext} from 'react'
import './App.css';
import Header from './Header'
import Navbar from './Navbar';
import LProjects from './LProjects';
import Skills from './Skills';
import Support from './Support';
import Footer from './Footer';
import Content from './Content';
import {Theme} from './App'
function Home() {
    const context = useContext(Theme)
  
  return (
    <div style={{backgroundColor:context.bg,color:context.text,transition:'1s'}}>      

        <Navbar icolor={context.text}/>
        <Header />
        <Content />
        <LProjects />
        <Skills />
        <Support />
        <Footer bg={context.text} icolor={context.bg} />
    </div>
  );
}

export default Home;