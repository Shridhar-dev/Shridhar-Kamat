import React,{useContext} from 'react'
import Navbar from './Navbar'
import ProHeader from './ProHeader'
import Footer from './Footer'
import {Theme} from './App'
import Item from './Item'

import ddg from './Images/ddg.jpg';
import fb from './Images/fb.png';
import arduino from './Images/arduino.png';
import iotlamp from './Images/iot lamp.png';
import IoT from './Images/iiot.png';
import ifttt from './Images/ifttt.jpg';
import tfi from './Images/textfromimg.jpg';
import bfi from './Images/bfi.jpg';
import cig from './Images/CAT IMAGE GENERATOR.png';
import BloHeader from './BloHeader'

function Blogs() {
    const context = useContext(Theme)
    return (
        <div style={{backgroundColor:context.bg,color:context.text,transition:'1s'}}>
            <Navbar icolor={context.text}/>
            <BloHeader/>

            <div class="container-fluid my-5" >
                <div class="row d-flex justify-content-center ">
                <Item url="https://medium.com/@shridharkamat10/how-to-make-a-random-cat-image-generator-with-react-and-cat-api-c52a093d8b42" img={cig} icolor={context.text} heading="A random cat image generator with React" text="Making a random cat image generator with React and Cat API" />
                <Item url="https://medium.com/@shridharkamat10/how-to-remove-background-from-images-no-photoshop-easiest-method-253bff1bd6eb" img={bfi} icolor={context.text} heading="Removing background from images" text="A simple way for removing background from images"/>
                <Item url="https://medium.com/@shridharkamat10/how-to-extract-text-from-image-using-python-in-windows-e138488fe615" img={tfi}icolor={context.text} heading="Extracting text from an image" text="Using python to extract text from an image"/>
                <Item url="https://medium.com/@shridharkamat10/ifttt-in-depth-smart-home-automation-31fa7c1846f4" img={ifttt}    icolor={context.text} heading="IFTTT automation app in depth" text="Learn about IFTTT app used for automation in depth"/>
                <Item url="https://medium.com/@shridharkamat10/duckduckgo-the-best-search-engine-141b6ade96d0" img={ddg} icolor={context.text} heading="DuckDuckGo browser" text="Learn about duckduckgo browser in depth"/>
                <Item url="https://medium.com/@shridharkamat10/facebook-gaming-app-in-depth-66fd4847fad0" img={fb} icolor={context.text} heading="Facebook Gaming App in depth" text="Learn about Facebook Gaming app in depth"/>
                <Item url="https://medium.com/@shridharkamat10/arduino-pin-stuck-problem-solved-c28865394bb1" img={arduino} icolor={context.text} heading="Arduino pin stuck problem solution!" text="Solution for pin that gets stuck in Arduino's GPIO"/>
                <Item url="https://medium.com/@shridharkamat10/how-to-make-an-cool-iot-lamp-that-can-be-controlled-through-google-assistant-37ba61b6fdb2" img={iotlamp} icolor={context.text} heading="IoT lamp with Google Assitant" text="An IoT lamp controlled with Google Assistant"/>
                <Item url="https://medium.com/@shridharkamat10/understanding-mqtt-and-iot-946c5daf272b" img={IoT} icolor={context.text} heading="Understanding MQTT and IoT" text="Learn and Understand the concepts of MQTT and IoT"/>

                </div>
            </div>

            <Footer bg={context.text} icolor={context.bg} />
           

        </div>
    )
}

export default Blogs