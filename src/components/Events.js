import { useState } from "react";

const Events = () =>{

    const [state, setState] = useState({"first Name": "", "Last Name": "","message":""});
    const [color, setColor] = useState({});

    const generateRandomColor=()=>"#" + Math.floor(Math.random()*16777215).toString(16);
    

    const handleClickHandler =(e) =>{
        setState({...state,"message":"mouse clicked event"});
        setColor ({'color':generateRandomColor()}); 
    }

    const handleMouseMove =(e) =>{
        setState({...state,"message":"mouse moved event"});
        setColor ({'color':generateRandomColor()}); 
    }

    const handleKeyPress =(e) =>{
        setState({...state,"first Name": e.target.value,"message":`${e.target.value} Pressed a key`});
        setColor ({'color':generateRandomColor()}); 
    }

    const handleCheckBox =(e) =>{
        setState({...state,"message":`OnChange is occured on Checkbox and it is now ${e.target.checked} `});
        setColor ({'color':generateRandomColor()}); 
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        setState({...state,"message":`onSubmit it is preventing from submit it `});
        setColor ({'color':generateRandomColor()}); 
    }
    
    
    
    
    
    return (
    <div>
        <p className="text-center" style={color}>
            {state.message}
        </p>
        <div className="btn-group gap-3">
            <button className="btn btn-success" onClick={handleClickHandler}>click me</button>
            <button className="btn btn-success" onMouseMove={handleMouseMove}>Movie Mouse here</button>
            <input className="" type="text" name="first_name" onKeyUp={handleKeyPress}></input>
            <input className="form-check-input" type="checkbox" name="check" onChange={handleCheckBox}></input>
            <form onSubmit={handleSubmit}>
                <button className="btn btn-success" type="submit">submit</button>
            </form>
        </div>
    </div>
);
};

export default Events;