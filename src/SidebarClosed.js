import React from 'react'

function SidebarClosed() {
    return (
        <div>
             <div class="sidebar ">
            <div class="profile">
                <div class="profile-img">
                    <img src="img/logo.png" alt=""/>
                </div>
            </div>
            <div class="main-menu">
                <div class="menu-item">
                    <a href="index.html">
                        <i class="fa fa-home"></i>
                        <p class="menu-text">Home</p>
                    </a>
                </div>
                <div class="menu-item">
                    <a href="lessons.html">
                        <i class="fa fa-graduation-cap"></i>
                        <p class="menu-text">Lessons</p>
                    </a>
                </div>
                <div class="menu-item">
                    <a href="leads.html">
                        <i class="fa fa-address-book"></i>
                        <p class="menu-text">Leads</p>
                    </a>
                </div>
                <div class="menu-item">
                    <a href="chops.html">
                        <i class="fa fa-book"></i>
                        <p class="menu-text">Chops</p>
                    </a>
                </div>
                <div class="menu-item">
                    <a href="fullz.html">
                        <i class="fa fa-credit-card"></i>
                        <p class="menu-text">Fullz</p>
                    </a>
                </div>
                <div class="menu-item active">
                    <a href="spoofing.html">
                        <i class="fa fa-phone"></i>
                        <p class="menu-text">Spoofing</p>
                    </a>
                </div>
                <div class="menu-item">
                    <a style={{display:"flex", justifyContent:"center"}} href="tools.html">
                        <i class="fa fa-wrench"></i>
                        <p class="menu-text">Tools</p>
                    </a>
                </div>
                <div class="menu-item">
                    <a href="services.html">
                        <i class="fa fa-business-time"></i>
                        <p class="menu-text">Services</p>
                    </a>
                </div>
                <div class="menu-item">
                    <a href="https://t.me/diabl6" target="_blank">
                        <i class="fa fa-question-circle"></i>
                        <p class="menu-text">Contact Us</p>
                    </a>
                </div>

            </div>
           
            <div class="expand-button">
                <i class="fa fa-angle-right expand-icon"></i>
            </div>
        </div>
        </div>
    )
}

export default SidebarClosed
