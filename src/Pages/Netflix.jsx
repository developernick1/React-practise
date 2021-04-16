import React from 'react';
import Card from './Card';
import Sdata from './Seriesdata';


const Netflix = () =>
{
    return(

    <>
       {Sdata.map((val) => {
           return(
            <Card
            key={val.id}
            imgsrc={val.imgsrc} 
            category={val.category}
            tname={val.tname}
            linker={val.linker}
        />
           );
       })}
      
       </>
    );
  
}

export default Netflix;






// {Sdata.map((val) => 
// {
//     return(
//         <Card
//             key={val.id}
//             imgsrc={val.imgsrc} 
//             category={val.category}
//             tname={val.tname}
//             linker={val.linker}
//         />
//     );
// }
// )
// }