import {useState} from "react";

export default function ClickEvent() {
    const [event, setEvent] = useState(null);
    const handleClick = (e : any) => {
        e.target = e.target.outerHTML;
        delete e.view;
        setEvent(e);
    }
    return(
        <div>
            <h2>Event Object</h2>
            <button onClick = {(e) => handleClick(e)} className="wd-click-event-object">
                Display Event Object
            </button>
            <pre>{JSON.stringify(event, null, 2)}</pre>
        </div>
    )
}