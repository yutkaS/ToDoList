import React, {useState, useCallback} from 'react';
import './App.css';
import {CreateToDoList} from './components/ToDoList';
import {CreateInput} from './components/Input'

function App() {
    const [inputValue, setInputValue] = useState(``);
    const [toDoList, setToDoList] = useState([]);
    const [filter, setFilter] = useState(0);

    const addTarget = (target) => {
        console.log(target);
        const objectTarget = {element: target, state: 'active'};
        const newToDoList = [objectTarget, ...toDoList];
        setToDoList(newToDoList);
    };

    const onChangeFunc = useCallback((element) => {
        setInputValue(element.target.value);
    })

    const removeFunc = (i) => {
        const newToDoList = [...toDoList];
        newToDoList[i].state === 'active' ? newToDoList[i].state = 'removed'  : newToDoList[i].state = 'active';
        setToDoList(newToDoList);
    }

    return (
        <body>
        <CreateInput onChangeFunc={onChangeFunc}/>
        <button onClick={() => addTarget(inputValue)}>Add</button>

        <div className="to_do_list"><CreateToDoList toDoListArr={toDoList} removeFunc={removeFunc} filter={filter}/></div>

        <div className="filterMenu">
            <div onClick={() => setFilter(0)} className="menuComponent filterAll">All</div>
            <div onClick={() => setFilter(1)} className="menuComponent filterCompleted">Completed</div>
            <div onClick={() => setFilter(2)} className="menuComponent filterNotCompleted">Not Completed</div>
        </div>

        </body>
    );
}

export default App;
