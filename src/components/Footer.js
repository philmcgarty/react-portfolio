import React from "react";
// footer section
function Footer(){
    return(
        
        <footer>
            {/* GitHub Link */}
            <a href="https://github.com/philmcgarty" target="_blank">
                <i className="fa fa-github footer-icons"></i>
            </a>
            {/* LinkedIn Link */}
            <a href="https://ca.linkedin.com/in/philmcgarty" target="_blank">
                <i className='fa fa-linkedin footer-icons'></i>
            </a>
            {/* Twitter Link */}
            {/* <a href="https://twitter.com/philmcgarty" target="_blank">
                <i className="fa fa-twitter"></i>
            </a> */}
        </footer>
    )
}

export default Footer;