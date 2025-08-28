import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {add} from "./addReducer";
export default function AddReducer() {
    const dispatch = useDispatch();
    const [a, setA] = useState(10);
    const [b, setB] = useState(12);
    const {sum} = useSelector((state:any) => state.addReducer);
    return(
        <div>
            <h1>Add redux</h1>
            <input type="number" defaultValue={a}
            onChange={(e) => setA(parseInt(e.target.value))}
            />
            <input type = "number" defaultValue={b}
            onChange={(e) => setB(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(add({a,b}))}>
                Sum is 
            </button>
            {sum}
        </div>
    )
}