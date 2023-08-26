import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([
    {
      text: "default todo",
      done: true,
    },
  ]);
  const todoInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTask = () => {
    if (todo.trim() != "") setTask([...task, { text: todo, done: false }]);
    setTodo("");
  };
  const handleDeleteTask = (index) => {
    const updatedTask = task.filter((_, item)=>item !== index);
    setTask(updatedTask)
  };
    const handleTogleChange=(index)=>{
      const updatedTask = [... task]
      updatedTask[index].done = !updatedTask[index].done
      setTask(updatedTask)
    }
  

  return (
    <div className={"container"}>
      <label>
        <input
          type="text"
          value={todo}
          onChange={todoInputChange}
          placeholder="todo"
        />
        <button onClick={handleAddTask} type="button">
          click
        </button>
      </label>
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            <input type="checkBox" checked={item.done} onChange={() =>handleTogleChange(index)}/>
            <span>{item.text}</span>
            <button onClick={() =>handleDeleteTask(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
