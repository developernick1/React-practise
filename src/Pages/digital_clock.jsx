import React, { useState } from 'react';



const DigitalClock = () => 
{
    const time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const Update = () => 
    {
    const time = new Date().toLocaleTimeString();

    setCtime(time);

    
}
setInterval(Update, 1000);

    return(
        <>
            <h1 style={{textAlign: "center"}} >TIme By Hooks</h1>
            <h1 style={{textAlign: "center"}} > {ctime} </h1>
            <button style={{ marginLeft : "925px"}} onClick={Update} >Just sec</button>


        </>
    );
}

export default DigitalClock;