import React from  'react';

export const CreateToDoList = ({toDoListArr, removeFunc, filter}) => (
          toDoListArr.map((e, i) => {
            if(filter === 0){
                return <div onClick={()=>{removeFunc(i)}} className={e.state}>{e.element}</div>
            }
            else if(filter === 1 && e.state === 'removed'){
                return <div onClick={()=>{removeFunc(i)}} className={e.state}>{e.element}</div>
            }
            else if(filter === 2 && e.state === 'active'){
                return <div onClick={()=>{removeFunc(i)}} className={e.state}>{e.element}</div>
            }
        })
);


