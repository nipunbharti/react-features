import React, { useState } from "react";

const TodoStateHook = () => {
    const [list, setList] = useState([]);
    const [text, setText] = useState('');

    function addTodo(e) {
        let prevList = list;
        prevList = [...prevList, text];
        setList(prevList);
        setText('');
    }

    const liElement = list.map((li, index) => <li key={index}>{li}</li>);
    return (
        <div className="todoContainer">
            <ul>
                {liElement}
            </ul>
            <input placeholder="Add todo" value={text} onChange={(e) => setText(e.target.value)} className="todoInput" />
            <button onClick={addTodo} className="todoButton">Add</button>
        </div>
    );
}

export default TodoStateHook;