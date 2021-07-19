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

export default function Homepage() {
    const [currentView, setCurrentView] = useState('Home');

    const renderPage = () => {
    if (currentView === 'Home') {

        return(
        <Fragment>
            <Navbar />
            <About />
        </Fragment>
        );
    }
    if (currentView === 'Contact') {
        return(
        <Fragment>
            <Navbar />
            <Footer />
        </Fragment>
        );
    }
    if (currentView === "Coding") {
        return(
        <Fragment>
            <Navbar />
            <Examples />
        </Fragment>
        )
    }
    else {
        return(
        <Fragment>
            <Navbar />
            <About />
        </Fragment>
        )
    }

    const handleViewChange = (view) => setCurrentView(view)

}}

