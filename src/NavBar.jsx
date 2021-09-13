import React from "react";
import './css/NavBar.css';

function NavBar() {
    return (
        <div>
            <ul class="nav-bar">
                <li style={{backgroundColor: 'grey'}}><a href="#Home">IService</a></li>
                <li><a href="#PostaTask">Post a task</a></li>
                <li><a href="#BecomeAnExpert">Become an expert</a></li>
                <li><a href="#FindTasks">Find tasks</a></li>
                <li><a href="#HowItWorks">How it works</a></li>
                <li><a href="#SignIn">Sign in</a></li>
            </ul>
        </div>
    )
}

export default NavBar;