import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REACT_APP_REMOTE_SERVER;
export default function WorkingWithFunctions(){
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description:'Created a NodeJS server with ExpressJS',
        due:'2025-10-30',
        completed:false,
        score:0
    })
    return(
        <div className="my-1">
            <h1>Working with objects</h1>
            <a className="btn btn-primary me-2" id="wd-update-assignment-title"
            href={`${REMOTE_SERVER}/lab5/assignment/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-auto" defaultValue={assignment.title} onChange={(e) => {setAssignment({...assignment, title:e.target.value})}}/>
        </div>
    );
}