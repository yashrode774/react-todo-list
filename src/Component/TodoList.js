import '../Styles/TodoList.css'
import {Fragment, useState} from "react";

const TodoList = () => {
    const [list, setList] = useState(["eat", "sleep", "code anything", "read"]);
    // State to set the new todo element.
    const [newTodo, setNewTodo] = useState('');

    const handleDelete = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    const handleAdd = () => {
        if (newTodo.trim() !== '') {
            setList([...list, newTodo]);
            setNewTodo('');
        }
    }

    return (
        <div>

            <ul>
                {list.map((item, index)=> (
                    <li key={index}>{item}
                        <button onClick={() => {handleDelete(index)}}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={ (e) => {setNewTodo(e.target.value)}}
            />
            <button className="add-item-button" onClick={handleAdd}>
                Add Item
            </button>
        </div>
    );
}

export default TodoList;
