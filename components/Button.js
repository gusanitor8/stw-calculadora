import React from "react";
import { useState, useEffect } from "react";
import "./Button.scss";

const Button = ({buttonText, color, hoverColor, activeColor}) => {
    const [styles, setStyles] = useState({});
    const [hover, setHover] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);        
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const handleClick = () => {
        setIsActive(true);
        setTimeout(() => {
            setIsActive(false);
        }, 200);
    };

    useEffect(() => {
        isActive ? setStyles({backgroundColor: activeColor}) : setStyles({backgroundColor: color});
    }, [isActive]);

    useEffect(() => {
        setStyles({backgroundColor: color});
    }, [color]);

    useEffect(() => {
        hover ? setStyles({backgroundColor: hoverColor}) : setStyles({backgroundColor: color});
    }, [hover]);

    return(
            <>
                <div className="button-container">
                    <button 
                        className="button-text"
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                        style={styles}
                        >{buttonText}</button>
                </div>
            </>
        );
};

export default Button;