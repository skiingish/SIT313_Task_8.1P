import React from "react";
import './css/Footer.css'
import NewsLetterSignup from "./NewsLetterSignup";
import SocialLinks from "./SocialLinks";


function Footer() {
    return(
        <div>
            <ul class="footer"> 
                <NewsLetterSignup />
                <SocialLinks />
            </ul>
        </div>
    )
}

export default Footer;