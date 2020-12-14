import logo from './logo.svg';
import React,{createContext, useState} from 'react'
import './App.css';
import Header from './Header'
import Navbar from './Navbar';
import LProjects from './LProjects';
import Skills from './Skills';
import Support from './Support';
import Footer from './Footer';
import Content from './Content';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Blogs from './Blogs';
let Theme = createContext()
function App() {

  const [themeCha, setThemeCha] = useState({bg:'white',text:'black',btn:'🌙'})
  function changeTheme(){
    if(themeCha.bg === 'white'){
      setThemeCha({bg:'black',text:'white',btn:'☀️'})
    }
    else if(themeCha.bg === 'black'){
      setThemeCha({bg:'white',text:'black',btn:'🌙'})
    }
  }

  return (
    <div className="App" style={{maxWidth:'1400px'}}>
      <div style={{borderRadius:'50%',height:'3rem',width:'3rem',backgroundColor:themeCha.text,position:'fixed',bottom:'3%',right:'2%',fontSize:'1.5rem',cursor:'pointer',zIndex:1000}} class="d-flex justify-content-center align-items-center" onClick={()=>changeTheme()}>{themeCha.btn}</div>

       <Theme.Provider value={{bg:themeCha.bg,text:themeCha.text}} >
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/blogs" component={Blogs}/>
       </Switch>
       </Theme.Provider>
    </div>
  );
}

export default App;
export {Theme}
