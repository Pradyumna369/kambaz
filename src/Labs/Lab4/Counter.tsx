import React, {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count)
    return(
        <div>
            <h2>Counter is : {count}</h2>
        <button onClick = {() => {setCount(count - 1)}} id = "wd-counter-click-down">
            Down
        </button>
        <button onClick={() => {setCount(count + 1)}} id = "wd-counter-click-up" >
            Up
        </button>
        </div>
    )
}