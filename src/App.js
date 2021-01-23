import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App h-screen">
            <div className="container mx-auto">
                <Navbar/>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

function Projects() {
    return <h1>Projects section</h1>
}

function Contact() {
    return <h1>Contact section</h1>
}

export default App;
