import React from "react";


function Footer(props){
    return(
        <footer id="footer">
            < div className="container-fluid text-center shadow-lg p-2 ">
                <div className="copyright">
                    &copy; Copyright <strong><span>Sarath</span></strong>.All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <span className="text-warning">Sarath</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer

