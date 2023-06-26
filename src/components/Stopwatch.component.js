import { useState } from "react";

const Stopwatch = () => {
    

    const [time, setTime] = useState(0);

    const incrementTime = () => {
        setTime((time)=>{
            return time+1;
        });
    }

    const handleClick = () =>{
        setInterval(incrementTime, 1000);
    }

    return (  
        <div>
            <div>
                <span className="timer">Time: {time} </span>
            </div>
            <button onClick={handleClick} type="button" className="btn btn-primary">Start</button>
        </div>
    );
}
 
export default Stopwatch;
