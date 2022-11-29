# Learn React in 10 minutes by building a Todo App with Vite and Tailwind

React is a powerful Javascript library that helps you develop faster and better user interface.

Through this tutorial you will learn how to create an To-do list with React, Vite and TailwindCSS. Furthermore, you will also learn how to handle form event using React Hook and this course can help you getting started in learning React and get an awesome web development job in the future. 

You can see the result of **link** of the tutorial here.

![react-to-do-list](https://drive.google.com/uc?export=download&id=1oQGd2YTIBDIFh0xFdtm4jIKeEOet3Iik)

## Prerequisites

You will need to have `npm`, `git` and `node` installed, if not you will need to follow the instruction below:P
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [node](https://nodejs.org/en/download/) 

## Initial Setup

You can follow the instruction **here** or follow the steps below:

1. ### Create your project

Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use  [Create Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

```
npx create vite react-tailwind-todo --template react
```
2. ### Install Tailwind CSS

Install  `tailwindcss`  and its peer dependencies via npm, and then run the init command to generate both  `tailwind.config.cjs`  and  `postcss.config.cjs`.
```
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
3. ### Configure your template paths

Add the paths to all of your template files in your  `tailwind.config.cjs`  file.

4. ### Add the Tailwind directives to your CSS
    
 Add the  `@tailwind`  directives for each of Tailwind’s layers to your  `./src/index.css`  file.
    
 ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
   ```
    
5. ###  Start your build process
Run your build process with  `npm run dev`.
    
  ```
  npm run dev
  ```
    
6.  ### Start using Tailwind in your project
    
  Start using Tailwind’s utility classes to style your content.

```
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

You can visit `localhost:5173` to see the result below:

![react-to-do-list](https://drive.google.com/uc?export=download&id=1uOmclh2xS__1DfT2x5tcQcmTTiUEI_E9)

## Create Input Form

We  need an input field where we can add new tasks to our ToDo list
```
import  "./App.css";

import { React, useState } from  "react";

function  App() {
//state to manage input field
const [todo, setTodo] =  useState("");

return (
	<div  className="h-screen flex justify-center items-center flex-col gap-8">
		<div  className="flex justify-center items-center gap-6">
			<input
				className="w-72 border-2 rounded-xl px-3 py-3 bg-green-600 backdrop-blur-lg"
				//set value of input field
				value={todo}
				onChange={(e) => {
				//update the value of your state base on the input field
				setTodo(e.target.value);
				}}
				placeholder="Do homework"
			/>
			<button
				className="h-full px-5 py-2 bg-green-600 text-white font-medium 		rounded-xl"
				onClick={() => {
				//Trigger on the onClick event of the button,
				// execute function to add new todo to the list here.
			}}>
				Add Todo Item
			</button>
		</div>
	</div>
);
}

export  default  App;
```
Running the code now will produce a result similar to the below image:
![Insert Image here](https://drive.google.com/uc?export=download&id=14OE4i36thDIAX2htBG6lpuKKWe7rmWU9)

## Display To-do List Items

The app first needs to store data in an array. Each child in this array will represent a task you need to complete like a do homework or write an email and the state of that task like done or in progress.

```
const todoList = [
    {
      id: 0,
      task: 'Do homework',
    },
    {
      id: 1,
      task: 'Write an email',
    }
  ]
```
To display the ToDo list items we will create a separate component. To achieve this, in your project directory create a folder called `components` and a file `TodoList.js` within it. Next, we will define the structure for our to-do items with the following code in `TodoList.js`:
```
import  React  from  "react";

const  TodoList  = () => {

  

const  todoList  = [
    {
      id: 0,
      task: 'Do homework',
    },
    {
      id: 1,
      task: 'Write an email',
    }
  ];

  

return (

		<div  className="w-full text-center flex items-center flex-col gap-5">

		<h1  className="text-green-600 uppercase font-semibold text-2xl">Task List</h1>

			<div  className="w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">

			{  todoList.map(({ task }, id) => {

				return (

				<div  className="flex justify-between items-center mb-5"  key={id}  >

					<li  className="list-none w-2/3 text-left break-normal">{  task  }</li>

					<div  className="flex gap-3">

						<button  className="bg-green-600 text-white px-2 py-2 font-medium rounded-md">Editing</button>

						<button  className="bg-white text-green-600 px-2 py-2 font-medium rounded-md">Delete</button>

					</div>

				</div>

				)

			})}

			</div>

		</div>

	);

};

export  default  TodoList;
```

In this case, we should seperate the `Todo` into a different component to handle more complex behavior in the future.

```
import React, { useState } from "react";

const Todo = () => {
  const [editState, setEditState] = useState(false);
  const [todo, setTodo] = useState('');

  return (
    <div className="flex justify-between items-center mb-5" key={id} >
        <li className="list-none w-2/3 text-left break-normal">{ task }</li>
        <div className="flex gap-3">
            <button className="bg-green-600 text-white px-2 py-2 font-medium rounded-md" onClick={() => setEditState((state) => !state)}>Editing</button>
            <button className="bg-white text-green-600 px-2 py-2 font-medium rounded-md">Delete</button>
        </div>
      </div>
    </div>
  )
}

const TodoList = ({ todoList }) => {

  return (
    <div className="w-full text-center flex items-center flex-col gap-5">
      <h1 className="text-green-600 uppercase font-semibold text-2xl">Task List</h1>
      <div className="w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">
          { todoList.map(({ task }, id) => {
            return (
              <Todo task={task} id={id}/>
            )
          })}
      </div>
    </div>
  );
};

export default TodoList;
```

Running the code now will produce a result similar to the below image:
![Insert Image here]()

## Create, edit and delete tasks in To-Do List

1. ### Create
We will need to use React Hook to manage tasks in to-do list
```
const [todoList, setTodoList] =  useState([
	{
		task:  'Do homework',
		done:  false
	},
	{
		task:  'Write an email',
		done:  true
	}
]);
```
Passing the to-do list as a props to the component `TodoList`:

```
<TodoList  todoList={todoList}  />
```

```
import  React  from  "react";

const  TodoList  = ({ todoList }) => {
...

```

Create new task when click the `Add` button:

```
onClick={() => {
	setTodoList([...todoList, {
		id: todoList.length,
    task:  todo,
	}])

}}
```

![react-to-do-list](https://drive.google.com/uc?export=download&id=1LU1H5JbEFUg2-9ZN8ErbNjhu27RvPrqr)


3. ### Edit

First of all you need to manage the state of a task to see if users are editing it or not

```
  const [editState, setEditState] = useState(false);
``` 

Then, change the task into a form for user to edit the content of the task


```
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
                setTodo(task);
              }}
            >Delete</button>
        </div>
      </div>
      }
    </div>
  )
}
```

Add `handleEdit` function to change the content of the todoList

```
const handleEdit = (task, id) => {
  const filteredTodoList = todoList.filter(value => {
    return value.id !== id;
  })

  setTodoList([...filteredTodoList, {
    task: task,
    id: id
  }].sort((a, b) => { return a.id - b.id; }))
```

Running the code now will produce a result similar to the below image:
![Insert Image here](https://drive.google.com/uc?export=download&id=1uQzry-wkATWkhC4le-tpVNiHpZNuZ2HQ)


5. ### Delete

Add `handleDelete` function to delete the content of the todoList

```
const handleDelete = (id) => {
  const filteredTodoList = todoList.filter(value => {
    return value.id !== id;
  })

  setTodoList(filteredTodoList);
}
```

Don't forget to pass the props down to `ToDoList` and `Todo` functions or else it won't work.



## Deploy to Vercel

First of all, you need to push your code to a repository on github.



## Conclusion

We have created a Todo List with React,Vite and TailwindCSS. If you want to learn more you can checkout our course at [AlgoJedi](https://algojedi.online/blog/).
Or read more blog at [AlgoJedi blog](https://algojedi.online/blog/)
