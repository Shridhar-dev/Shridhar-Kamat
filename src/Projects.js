import React,{useContext} from 'react'
import Navbar from './Navbar'
import ProHeader from './ProHeader'
import Footer from './Footer'
import {Theme} from './App'
import Item from './Item'
import Discord from './Images/Discord.png'
import Twitter from './Images/twitter.png'
import Discreet from './Images/DISCREET.png'
import Todo from './Images/todoimg.PNG'
import GNH from './Images/GNH.png'
import Llama from './Images/Lj (2).png'
import Demo from './Images/demo.png'
import Cat from './Images/catopedia.png'
import Iot from './Images/IoT.png'

function Projects() {
    const context = useContext(Theme)
    return (
        <div style={{backgroundColor:context.bg,color:context.text,transition:'1s'}}>
            <Navbar icolor={context.text}/>
            <ProHeader />

            <div class="container-fluid my-5" >
                <div class="row d-flex justify-content-center ">
                <Item url="https://disord-clone.netlify.app/" img={Discord} icolor={context.text} heading="Discord UI clone" text="The UI clone of Discord using React and Bootstrap" />
                <Item url="https://twitter-clone-af477.web.app/" img={Twitter} icolor={context.text} heading="Twitter Clone" text="A twitter clone built with React and Material UI along with Firebase"/>
                <Item url="https://discreet-b6d33.web.app/" img={Discreet}icolor={context.text} heading="Discreet" text="A site having messenger like functionality"/>
                <Item url="https://todo-5b16d.web.app/" img={Todo}    icolor={context.text} heading="Todo app" text="A simple Todo app built with Firebase"/>
                <Item url="https://gnhunofficial.netlify.app/" img={GNH} icolor={context.text} heading="Discord" text="A site showcasing people with varied talents in Goa"/>
                <Item url="https://llamajokes.netlify.app/" img={Llama} icolor={context.text} heading="Llama Jokes" text="Who says a llama can't joke? A joke generator"/>
                <Item url="https://thz.netlify.app/" img={Demo} icolor={context.text} heading="THZ" text="Just a demo trial website made for testing my skills"/>
                <Item url="https://catopedia.netlify.app/" img={Cat} icolor={context.text} heading="Catopedia" text="A cat image generator using cat api"/>
                <Item url="https://medium.com/@shridharkamat10/how-to-make-an-cool-iot-lamp-that-can-be-controlled-through-google-assistant-37ba61b6fdb2" img={Iot} icolor={context.text} heading="IoT Lamp" text="A simple IoT lamp controlled via Google Assistant"/>

                </div>
            </div>

            <Footer bg={context.text} icolor={context.bg} />
           

        </div>
    )
}

export default Projects
