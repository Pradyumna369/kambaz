import { UseSelector, useDispatch, useSelector } from "react-redux";
import {increment, decrement} from "./counterReducer"
export default function CounterRedux() {
    const {count} = useSelector((state:any) => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )
}