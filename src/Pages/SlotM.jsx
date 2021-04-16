import React from  'react';
import Arraydestruct from './array_destructing';
import './Slotm.css'

const Dones = (props) => {
let x = props.x;
let y = props.y;
let z = props.z;

if(props.x === props.y && props.y===props.z){
return(
<>
<div>
    <h3>
        {x} {y} {z}
    </h3>
    <h3>
        This Is Match.....

        Hey Programmer!!!!
    </h3>
</div>
</>
); 
}
else
{
return(
<>
<div>
     <h3>
         {x} {y} {z}
     </h3>
     <h3>
         This Is Not Match.....
     </h3>
</div>             
 </>
); 
}
}

const SlotM = () => 
{
    return(
        <>
            <h1 className='header'>🎰 Play the <span style={{fontWeight : "bold"}}> SLOT MACHINE GAME 🎰</span></h1>
            <div>
            <Dones x='😀' y='😀' z='😀'/>
            <hr/>
            <Dones x='😎' y='😎' z='😀'/>
            <hr/>
            <Dones x='😏' y='😏' z='😏'/>
            <hr/>
            </div>
            <Arraydestruct />
        </>
        );  
    }

export default SlotM;