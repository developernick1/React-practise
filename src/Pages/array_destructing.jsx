import React, { useState } from 'react';



const Arraydestruct = () => 
{


    const state = useState();
    const [count, setCount] = useState(2);

    let curntTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(curntTime);

    const UpTime = () => 
    {
        let thisTime = new Date().toLocaleTimeString();
        setTime(thisTime);
    }

    const IncNum = () =>
    {
        // console.log("clicked",count++ );

        setCount(count + 1);

    }
    return(
        <>
            {/* <h1>Array Distructor</h1>
              {console.log("This is swap Value",swap(),`Value of A is ${a}`,`Value of b is ${b}`)} */}
           
            <h1 style={{textAlign: "center"}}>Hooks</h1>
            <h1 style={{textAlign: "center"}}>{count}</h1>
            <button style={{ marginLeft : "925px"}} onClick={IncNum} >Click Me</button>
            <hr />
       
            <h1 style={{textAlign: "center"}}>Time By Hooks</h1>
            <h1 style={{textAlign: "center"}}>{time}</h1>
            <button style={{ marginLeft : "925px"}} onClick={UpTime} >Update Time</button>
            <hr/>

            <h1 style={{textAlign: "center"}}>Digital Clock By Hooks</h1>
            <h1 style={{textAlign: "center"}}>{time}</h1>
            <button style={{ marginLeft : "925px"}} onClick={UpTime} >Update Time</button>
        </>
    );
}

export default Arraydestruct;