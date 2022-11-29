import "./App.css";
import { React, useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  //state to manage input field
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      task: 'Do homework',
    },
    {
      id: 1,
      task: 'Write an email',
    }
  ]);

  const handleEdit = (task, id) => {
    const filteredTodoList = todoList.filter(value => {
      return value.id !== id;
    })

    setTodoList([...filteredTodoList, {
      task: task,
      id: id
    }].sort((a, b) => { return a.id - b.id; }))
  }

  const handleDelete = (id) => {
    const filteredTodoList = todoList.filter(value => {
      return value.id !== id;
    })

    setTodoList(filteredTodoList);
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-8">
      <div className="flex justify-center items-center gap-6">
        <input
          className="w-72 border-2  rounded-xl px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
          //set value of input field
          value={todo}
          onChange={(e) => {
            //update the value of your state base on the input field
            setTodo(e.target.value);
          }}
          placeholder="Do homework"
        />
        <button
          className="h-full px-5 py-2 bg-green-600 text-white font-medium rounded-xl"
          onClick={() => {
            setTodoList([...todoList, {
              id: todoList.length,
              task: todo
            }])
          }}
        >
          Add Todo Item
        </button>
      </div>
      <TodoList 
        todoList={todoList}
        handleEdit={handleEdit} 
        handleDelete={handleDelete}
      />
    </div>
  );
}
export default App;