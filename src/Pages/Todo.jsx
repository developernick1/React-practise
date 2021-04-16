import React, { useState } from 'react';
import TodoList from './listtodo';
import './todo.css'

const Todo = () =>
{
    const [task , setTask] = useState();
    const [Listed , setList] = useState([]);

    const InputVal = (event) =>
    {
        setTask(event.target.value);

    };
    
    const done = () =>
    {
            setList((showList) => 
            {
                return[...showList, task];
            });
        setTask("");
    };

    const delfunc = (id) =>
    {
        console.log('delete')
        setList((delVal) => {
            return delVal.filter((arrIn, index) => 
            {
                return index !==id;
            })
        });

    };


    return(
        <>
            <main >
                <div className="Main">
                    <div className='Head'>
                        <h1>Todo List</h1>
                        <input 
                        type='text'
                        value={task}
                        placeholder="Enter your task"
                        onChange={InputVal}
                         />
                        <br/>
                        <button onClick={done}> + </button>
                    </div>
                    <div className='down'>
                    <ol>
                        {Listed.map((listVal, index) => 
                        {
                            return <TodoList 
                            text={listVal}
                            id={index}
                            key={index}
                            onSelect={delfunc}
                              />
                        })}
                    </ol>
                    </div>
                </div>
            </main>
        </>
    );
}
    
export default Todo;