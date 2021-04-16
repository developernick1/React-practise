import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const IncDec = () => 
{
    const [added, setAdded] = useState(0);

    const Incr = () => 
    {
        return(
                setAdded(added + 1)
            );
    }
        
        const Decr = () => 
        {
            if(added > 0  )
                    {
                        setAdded(added - 1)
                    } 
            else if(added === 0 )
                    alert("You reach to the zero");
    }
    
    return(
        <>
                <div className="Main" style={{background:"#fff", display:'grid', justifyContent: 'center', alignContent: 'center', padding: '25px' }}>
                    <div className="upper" style={{background:"#fff", color: "#000", border: '19px', borderColor: '#000', height: '200px', width: '50vh', marginTop: "250px" }}>
                        <h1 style={{background:"#fff",
                         justifyContent: 'center',
                          border: '19px',
                           borderColor: '#000',
                            alignSelf: 'center',
                             textAlign: 'center',
                              marginTop: "65px"  }}
                              >
                                  {added}
                              </h1>
                    </div>
                    <div className="down" style={{ display: "flex", justifyContent: 'space-around', background:"#fff", height: '200px', width: '50vh' }}>
                        <div className="down1" style={{  }}>
                        <Tooltip title="Add" aria-label="add">
                            <Button style={{color: "#000"}} onClick={Incr}><AddIcon  /></Button>
                        </Tooltip>
                        </div>
                        <div className="dpwn2" style={{ }}>
                            <Button onClick={Decr}><DeleteIcon /></Button>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default IncDec;