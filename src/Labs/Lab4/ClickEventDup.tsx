const hello = () => {
    alert("Hello world !")
}

const lifeIs = (string:String) => {
    alert(`Life is ${string}`)
}

export default function ClickEventDup() {
    return (
        <div id="wd-click-event">
            <button onClick={hello} id="wd-hello-world-click">
                Hello world
            </button>
            <button onClick={() => lifeIs("Good !!!")} id="wd-life-is-good-click">
                Life Is Good
            </button>
            <button onClick={() => lifeIs("Great !!!")} id="wd-life-is-great-click">
                Life Is Great
            </button>
        </div>
    )
}