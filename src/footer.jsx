import React from "react";
import './footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
const Header=()=>{
    return(
        <div className="footer">
        <div className="sb_footer section_padding">
        <div className="sb_footer-links">
        <div className="socialmedia">
        <div className="name">
        <h2></h2>
        </div>
        <h4> Reach us through </h4>
        <br></br>
        <a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
        <a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        </a>
        <a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
</a>
        
        </div>
        
        </div>
        </div>
        </div>
    )
}
export default Header;