import React, {useEffect,useState} from "react";
import "./Display.scss";

const Display = ({displayText, displayColor}) => {
    const[display,setDisplay] = useState('');
    const[styles,setStyles] = useState({});   

    useEffect(() => {
        setStyles({backgroundColor: displayColor});
    }, [displayColor]);

    useEffect(() => {
        setDisplay(displayText);
    }, [displayText]);

    useEffect(() => {
        if(display.length > 9){
            setDisplay('ERROR');
        }
    }, [display]);

    return(
        <>
            <div className="display-container" style={styles} >
                <h1 className="display-text">{display}</h1>
            </div>
        </>
        );
};


export default Display;