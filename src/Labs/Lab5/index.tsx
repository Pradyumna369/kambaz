import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import WorkingWithFunctions from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import HttpClient from "./HttpClient";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchornously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
const REMOTE_SERVER = import.meta.env.VITE_REACT_APP_REMOTE_SERVER;
export default function Lab5(){
    return (
        <div>
            <h2>Lab 5</h2>
            <div className="list-group">
                <a href={`${REMOTE_SERVER}/lab5/welcome`} 
                    className="list-group-item">
                    Welcome
                </a>
            </div><hr />
            <EnvironmentVariables/>
            <PathParameters/>
            <WorkingWithFunctions/>
            <WorkingWithArrays/>
            <HttpClient/>
            <WorkingWithObjectsAsynchronously/>
            <WorkingWithArraysAsynchronously />
        </div>
    );
}