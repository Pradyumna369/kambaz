export default function ChildStateComponent(
    // counter, setCounter:{ childCounter: number, setChildCounter = () => void: setCounter }
    {parentCounter: childCounter, setParentCounter : setChildCounter} : {parentCounter : number; setParentCounter :(counter:number) => void; }
){
    return (
        <div>
            {/* <button onClick={setChildCounter(childCounter + 1)} className="up-button"> */}
            <button onClick={() => setChildCounter(childCounter + 1)} className="wd-increment-child-state-click">
                Counter Up
            </button>
            <button onClick={() => setChildCounter(childCounter - 1)} className="wd-increment-child-state-click">
                Counter Down
            </button>
        </div>
    )
}