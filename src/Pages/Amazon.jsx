import React from 'react';
import Card from './Card';
import Sdata from './Seriesdata';


const Amazon = () =>
{
    return(
        <Card
        key={Sdata[3].id}
        imgsrc={Sdata[3].imgsrc} 
        category={Sdata[3].category}
        tname={Sdata[3].tname}
        linker={Sdata[3].linker}
      />
    )
}

export default Amazon;