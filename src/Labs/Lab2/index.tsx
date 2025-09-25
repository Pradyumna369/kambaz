import './index.css';
import {useSelector} from "react-redux";
export default function Lab2() {
    const {todos} = useSelector((state:any) => state.todosReducer);
   
    return (
        <div>
            <h2> Lab 2</h2>
            <ul>
                {
                    todos.map((todo: any) => (
                        <li key = {todo.id}>
                            {todo.title}
                        </li>
                    )
                )
                }
            </ul>
        </div>
    );
}