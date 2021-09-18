import React, { useState } from 'react'
import './App.css';
import logo from './img/logo.png'
import '../src/Icons/font-awesome-4.7.0/css/font-awesome.min.css'
import '../src/Icons/font-awesome-4.7.0/css/font-awesome.css'
import toolsIcon from '../src/Icons/tools-solid.svg'
import { Link } from 'react-router-dom';

function Sidebar() {
   const[open, setOpen]= useState(true)
   const [activeElement, setActiveElement]= useState("home")
    const removeOpenClass=()=>{
        var element = document.getElementById("sidebar");
        element.classList.remove("open");
        setOpen(false)
    }
    const addOpenClass=()=>{
        var element = document.getElementById("sidebar");
        element.classList.add("open");
        setOpen(true)
    }

    
    const ToggleActiveElement=(id)=>{
        var PrevSelectedelement = document.getElementById(activeElement);
        PrevSelectedelement.classList.remove("active");
        var element = document.getElementById(id);
        setActiveElement(id)
        element.classList.add("active");     
    }
      
   

    return (
        <div>
            <div id="particles-js"></div>
            <div id="sidebar" class="sidebar open">
            <div class="profile">
                <div class="profile-img">
                    <img src={logo} alt=""/>
                </div>
            </div>
            <div class="main-menu">
                <div id="home" onClick={()=>{ToggleActiveElement("home")}} class="menu-item active">
                    <Link to="/">
                        <i class="menu-icon fa fa-home"></i>
                        <span class="menu-text">Home</span>
                    </Link>
                </div>
                <div id="lessons" onClick={()=>{ToggleActiveElement("lessons")}} class="menu-item">
                    <Link to="/lessons">
                        <i class="fas fa-graduation-cap"></i>
                        <span class="menu-text">Lessons</span>
                    </Link>
                </div>
                <div id="leads" onClick={()=>{ToggleActiveElement("leads")}} class="menu-item">
                    <Link to="/leads">
                        <i class="fas fa-address-book"></i>
                        <span class="menu-text">Leads</span>
                    </Link>
                </div>
                <div id="chospans" onClick={()=>{ToggleActiveElement("chospans")}}  class="menu-item">
                    <Link to="/chospans">
                        <i class="fas fa-book"></i>
                        <span class="menu-text">Chops</span>
                    </Link>
                </div>
                <div id="fullz" onClick={()=>{ToggleActiveElement("fullz")}}  class="menu-item">
                    <Link to="/fullz">
                        <i class="fas fa-credit-card"></i>
                        <span class="menu-text">Fullz</span>
                    </Link>
                </div>
                <div id="spoofing" onClick={()=>{ToggleActiveElement("spoofing")}}  class="menu-item">
                    <Link to="/spoofing">
                        <i class="fas fa-phone"></i>
                        <span class="menu-text">Spoofing</span>
                    </Link>
                </div>
                <div id="tools" onClick={()=>{ToggleActiveElement("tools")}}  class="menu-item">
                    <Link to="/tools">
                        <i class="fas fa-wrench"></i>
                        <span class="menu-text">Tools</span>
                    </Link>
                </div>
                <div id="services" onClick={()=>{ToggleActiveElement("services")}}  class="menu-item">
                    <Link to="/services">
                        <i class="fas fa-suitcase"></i>
                        <span class="menu-text">Services</span>
                    </Link>
                </div>
                <div class="menu-item">
                    <a href="https://t.me/diabl6" target="_blank">
                        <i class="fas fa-question-circle"></i>
                        <span class="menu-text">Contact Us</span>
                    </a>
                </div>

            </div>
           
            <div onClick={open?removeOpenClass:addOpenClass} class="expand-button">
                <i class="fa fa-angle-right expand-icon"></i>
            </div>
        </div>


        </div>
    )
}

export default Sidebar;
