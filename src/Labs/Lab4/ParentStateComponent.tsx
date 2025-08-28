import { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";

export default function ParentStateComponent() {
    const [counter, setCounter] = useState(0);
    // {
    //     <ChildStateComponent 
    //     {counter, setCounter}
    //     />
    // }
    return (
        <div>
            <h2>Counter is : {counter}</h2>
            <ChildStateComponent 
            parentCounter = {counter}
            setParentCounter = {setCounter}
            />
        </div>
    )
}