import {useDispatch} from "react-redux";
import {deleteTodo, setTodo} from "./todosReducer";

export default function TodoItem({todo} : any) {
        const dispatch = useDispatch();
        return (
            <li key = {todo.id}>
                <button onClick = {() => dispatch(deleteTodo(todo.id))}
                >Delete</button>
                <button onClick = {() => dispatch(setTodo(todo))}>
                    Edit   
                </button> <></>  
                {todo.title}
            </li>
        );
}
