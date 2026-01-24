import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REACT_APP_REMOTE_SERVER;
export default function PathParameters(){
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    return(
        <div>
            <h3>Path Parameters</h3>
            <input className="form-control mb-2 w-auto" defaultValue={a} id="wd-path-parameter-a" type="number" 
            onChange={(e) => setA(e.target.value)}/>
            <input className="form-control mb-2 w-auto" defaultValue={b} id="wd-path-parameter-b" type="number" 
            onChange={(e) => setB(e.target.value)}/>
            <a className="btn btn-danger me-2" id="wd-path-parameter-add" 
            href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}>Add</a>
            <a className="btn btn-primary " id="wd-path-parameter-subtract"
            href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}>Subtract</a>
        </div>
    )
};