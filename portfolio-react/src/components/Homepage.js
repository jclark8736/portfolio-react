import React, { Fragment, useState } from 'react'
import congress from './images/congress.jpg'
import snowy from './images/snowy.png'
import readme from './images/gitcli.png'
import projectled from './images/projectled.jpg'
import techblog from './images/techblog.jpg'
import regex from './images/projectsnow.jpg'
import About from './About'
import Navbar from './Navbar'
import Footer from './Footer'
import Examples from './Examples'



const Homepage = () => {
    const [currentView, setCurrentView] = useState('Home');

    const renderPage = () => {
        switch (currentView) {
            case "Home":
    
                        return(
            <Fragment>
                <Navbar />
                <About />
            </Fragment>
            );
            case "Contact":
                return(
                    <Fragment>
                    <Navbar />
                    <Contact />
                </Fragment>
                )
                case "Coding":
                    return(
                        <Fragment>
                        <Navbar />
                        <Examples />
                    </Fragment>
                    )
                default:
                    return (
                        <Fragment>
                        <Navbar />
                        <About />
                    </Fragment>  
                    )
        }
        return (
            <div>
                {setCurrentView(currentView)}
            </div>
        )
    }
    }
  
export default Homepage



// export default function Homepage() {
    
//     const [currentView, setCurrentView] = useState('Home');
    
//     const renderPage = () => {
//     if (currentView === 'Home') {

//         return(
//         <Fragment>
//             <Navbar />
//             <About />
//         </Fragment>
//         );
//     }
//     if (currentView === 'Contact') {
//         return(
//         <Fragment>
//             <Navbar />
//             <Footer />
//         </Fragment>
//         );
//     }
//     if (currentView === "Coding") {
//         return(
//         <Fragment>
//             <Navbar />
//             <Examples />
//         </Fragment>
//         )
//     }
//     else {
//         return(
//         <Fragment>
//             <Navbar />
//             <About />
//         </Fragment>
//         )
//     }

//     const handleViewChange = (view) => setCurrentView(view)

// }}
// 
// 
// 
// 
