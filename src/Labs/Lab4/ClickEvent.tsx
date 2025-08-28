const hello = () => {
    alert("Hello World!!!");
}

const lifeIs = (good: String) => {
    alert(`Life is ${good}`);
}

export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>
            <button onClick={hello} id="wd-hello-world-click">
                Hello World!
            </button><br/> <br/>
            <button onClick={() => lifeIs("Good !!!")} id="wd-life-is-good-click">
                Life Is Good!
            </button><br/> <br/>
            <button onClick={() => lifeIs("Great !!!")} id="wd-life-is-great-click">
                Life Is Great!
            </button>
            <hr/>
        </div>
    )
}