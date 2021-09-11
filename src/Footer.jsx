import React from "react";

function Footer() {
    return(
        <div>
            <ul class="footer"> 
                <li><p>Newsletter Signup</p></li>
                <li> <input type="email" id="email_signup" name="email_signup" /></li>
                <li><button type="button">Subscribe</button></li>
                <li><p>Connect With Us</p></li>
                <li><p>Facebook</p></li>
                <li><p>Twitter</p></li>
                <li><p>Insta</p></li>
            </ul>
        </div>
    )
}

export default Footer;