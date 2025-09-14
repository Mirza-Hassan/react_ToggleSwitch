import React, {useState} from 'react';
import './ToggleSwitch.css';
const ToggleSwitch = ({ disabled = false }) =>{


    //state
    const [isOn, setIsOn] = useState(false);

    //togglebutton logic
    const handleToggle = () => {
        if (disabled) return;
        // console.log("toggle button clicked");
        setIsOn(!isOn);        
    }

    return(
        <div>
        <h1>Toggle Switch</h1>
        {/* Modern toggle switch styling */}
        <div 
            className={`toggle-switch ${isOn ? "on" : "off"} ${disabled ? "disabled" : ""}`} 
            onClick={handleToggle}
            tabIndex={disabled ? -1 : 0}
            role="switch"
            aria-checked={isOn}
            aria-disabled={disabled}
        >
            <div className="toggle-knob"></div>
        </div>
        </div>
    )
}
export default ToggleSwitch;