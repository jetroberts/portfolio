import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import {Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App h-screen">
            <div className="md:w-5/6 container mb-5 mx-auto">
                <Navbar/>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
                <Footer />

            </div>
        </div>
    );
}

export default App;
