import React, { useState } from "react";

const Todo = ({ task, id, handleEdit, handleDelete }) => {
  const [editState, setEditState] = useState(false);
  const [todo, setTodo] = useState('');

  return (
    <div className="flex justify-between items-center mb-5" key={id} >
      { editState ? 
      <div>
        <input 
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="bg-green-600 text-white px-2 py-2 font-medium rounded-md"
          onClick={() => {
            handleEdit(todo, id);
            setEditState(false);
          }}
        >Save</button>
      </div>:
      <div>
        <li className="list-none w-2/3 text-left break-normal">{ task }</li>
        <div className="flex gap-3">
            <button className="bg-green-600 text-white px-2 py-2 font-medium rounded-md" 
              onClick={() => {
                setEditState((state) => !state)
                setTodo(task);
              }}
            >Editing</button>
            <button className="bg-white text-green-600 px-2 py-2 font-medium rounded-md"
              onClick={() => {
                handleDelete(id);
                setTodo(task);y
              }}
            >Delete</button>
        </div>
      </div>
      }
    </div>
  )
}

const TodoList = ({ todoList, handleEdit, handleDelete }) => {

  return (
    <div className="w-full text-center flex items-center flex-col gap-5">
      <h1 className="text-green-600 uppercase font-semibold text-2xl">Task List</h1>
      <div className="w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">
          { todoList.map(({ task, id }) => {
            return (
              <Todo task={task} id={id} handleEdit={handleEdit} handleDelete={handleDelete} />
            )
          })}
      </div>
    </div>
  );
};
export default TodoList;