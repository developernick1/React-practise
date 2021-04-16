import React from 'react'

const TodoList = (props) =>
{
    return(
        <>
            <div style={{display:"flex"}}>

                <button style={{margin: '12px',   background: 'rgb(187, 52, 52)' }} 
                onClick={() => {
                    props.onSelect(props.id)
                } }
                 > X </button>
                <li style={{margin: '12px'}}>{props.text} </li>
             </div>
        </>
    );
}

export default TodoList;