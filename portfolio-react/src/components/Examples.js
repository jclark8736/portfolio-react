import React from 'react'
import congress from './images/congress.jpg'
import snowy from './images/snowy.png'
import readme from './images/gitcli.png'
import projectled from './images/projectled.jpg'
import techblog from './images/techblog.jpg'
import regex from './images/projectsnow.jpg'
import "./Examples.css";



const Examples = () => {


    return ( 

<div className ="d-flex flex-wrap" >
  <figure>
    <div id="begin-project">
      <h1>Code Projects</h1>
    </div>  
    <div className="code-projects">
      <a href="https://github.com/David-V-Rullo/New-Congressional-Bill-Tracker"><h3>Congressional Bill Tracker</h3></a> 
      <a href="https://congress-bill-tracker.herokuapp.com/"><img src={congress} /></a>
    </div>
    <div className="code-projects">
      <a href="https://github.com/jclark8736/weather-dashboard">
        <h3 >Weather Tracker</h3></a>
      <a href="https://jclark8736.github.io/weather-dashboard/"><img src={snowy} /></a>
    </div>
    <div className="code-projects">
      <a href="https://github.com/jclark8736/readme-generator"><h3>Readme-Generator</h3>
        <img src={readme} /></a>
    </div>
    <div className="code-projects">
      <a href="https://github.com/jclark8736/ecommerce-backend"><h3>E-Commerce Backend</h3>
        <img src={projectled} /></a>
    </div>
    <div className="code-projects">
      <a href="https://github.com/jclark8736/tech-blog"><h3>Tech-Blog</h3></a>
      <a href="https://tech-blogjc.herokuapp.com/"><img src={techblog} /></a>
    </div>
    <div className="code-projects">
      <a href="https://gist.github.com/jclark8736/1ca98d2014192ffece1e5714836e7606"><h3>Regex Gist</h3>
        <img src={regex} /></a>
    </div> 
  </figure>
</div>
    )}
    
    
      export default Examples;