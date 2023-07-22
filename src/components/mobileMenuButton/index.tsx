import React from "react";
import "./index.css";

interface Props {
    state: boolean;
    setState: () => void;
}
function MobileMenuButton({state, setState}: Props) {
    return ( 
        
        <div className={`menu-burguer ${state ? "open" : "close"}`} onClick={setState}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
        </div>
     );
}

export default MobileMenuButton;