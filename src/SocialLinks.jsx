import React from "react";

import instraLogo from './images/instagram_logo.png';
import facebookLogo from './images/facebook_social_media_icon.png';
import twitterLogo from './images/twitter_logo.png';

const SocialLinks = () => {
    return (
        <div>
            <li class="footer-social" style={{ float: "right" }}><img src={instraLogo} alt="instagram"/></li>
            <li class="footer-social" style={{ float: "right" }}><img src={twitterLogo} alt="Twitter"/></li>
            <li class="footer-social" style={{ float: "right" }}><img src={facebookLogo} alt="Facebook"/></li>
            <li class="footer-social" style={{ float: "right" }}><p>Connect With Us</p></li>
        </div>
    )
}

export default SocialLinks;