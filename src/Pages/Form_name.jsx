import React, { useState } from 'react';


const Form = () =>{
    const [named, setNamed] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',}
    )

    
    const InputChange = (event) =>{
            // console.log(event.target.name);
            // console.log(event.target.value);
            // console.log(name);
            // const name = event.target.name;
            // const value = event.target.value;
            const {name, value} = event.target;           
        

    setNamed((preValue) =>{
        return{
            ...preValue,
            [name] : value,
        };
    });
};

    const Upname = (behave) =>  
    {
        behave.preventDefault();
        alert("Submited Successfully");
    };

    
// (...) <---- this 3 dot is for the previos aur concading the data of an another array
                // Starts From here
                
                // const arr1 = ['Nick', 'kubde'];                                     
                // const arr2 = [21, 'maile', {...arr1}, 'software Developer'];
                // console.log(arr1);
                // console.log(arr2);
                
                // var racinggame = ['roadrage', 'rumble race', 'burnout'];
                // var [first, ...remain] = racinggame;
                
                // console.log(first);
                // console.log(remain);
                // // End From here

    return(
        <>
        <form onSubmit={Upname}>
            <div style={{marginTop: 150}}>
                <h1 style={{ textAlign: 'center'}}>Hello {named.fname} {named.lname} </h1>
                <br />
                 {named.email}
                <br />
                  {named.phone} 
                  
                    <input 
                        type="text" 
                        style={{marginLeft : "875px",padding : 10}} 
                        placeholder="Enter Your Name" 
                        name = 'fname'
                        onChange= {InputChange}
                        value={named.fname}
                    />
                    <input 
                        type="text" 
                        style={{marginLeft : "875px" , padding : 10}} 
                        placeholder="Enter Your Password" 
                        name = "lname"
                        onChange={InputChange}
                        value={named.lname}
                    />
                    <input 
                        type="text" 
                        style={{marginLeft : "875px" , padding : 10}} 
                        placeholder="Enter Your Email" 
                        name = "email"
                        onChange={InputChange}
                        value={named.email}
                    />
                    <input 
                        type="text" 
                        style={{marginLeft : "875px" , padding : 10}} 
                        placeholder="Enter Your phone" 
                        name = "phone"
                        onChange={InputChange}
                        value={named.phone}
                    />

                        <br />
                    <br />
                <button style={{marginLeft : "925px"}} onClick={Upname} >Submit</button>
            </div>
        </form>
        </>
    );
}

export default Form;