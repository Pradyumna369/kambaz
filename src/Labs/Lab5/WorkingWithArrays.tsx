import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REACT_APP_REMOTE_SERVER;
export default function WorkingWithArrays(){
    const [todo, setTodo] = useState({
        id:"1",
        title: "NodeJS assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2025-10-01",
        completed: false,
    });
    return(
        <div>
            <h2>Retrieve Arrays</h2>
            <a className="btn btn-primary my-2" id="wd-retrieve-todos"
            href={`${REMOTE_SERVER}/lab5/todos`}>Get Todos</a>
            <a className="btn btn-primary my-2" id="wd-retrieve-todos"
            href={`${REMOTE_SERVER}/lab5/todos/${todo.id}`}>
                Get Todo by id
            </a>
            <input id="wd-retrieve-todo-by-id" defaultValue={todo.id}
            className="form-control w-25" onChange={(e) => setTodo({...todo, id:e.target.value})} />
            <h3>Filtering Array Items</h3>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/todos?completed=true`}>
            Get Completed Todos</a>
            <h3>Creating Todos</h3>
            <a id="wd-create-new-todo" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/todos/create`}>Create New Todo</a>
            <h3>Deleting a todo</h3>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/todos/${todo.id}/delete`}>Delete a todo with id = {todo.id}</a>
            <input defaultValue={todo.id} className="form-control w-50" onChange={(e) => setTodo({...todo, 
                id: e.target.value
            })}
            />
            <h3>Updating an item in an array</h3>
            <a 
            href={`${REMOTE_SERVER}/lab5/todos/${todo.id}/title/${todo.title}`}>Update Todo</a>
            <input defaultValue={todo.id} className="form-control w-auto float-start" onChange={
                (e) => setTodo({...todo, id: e.target.value})
            }
            />
            <input defaultValue={todo.title} className="form-control w-auto float-start" onChange={
                (e) => setTodo({...todo, title: e.target.value})
            }
            />
        </div>
    )
}