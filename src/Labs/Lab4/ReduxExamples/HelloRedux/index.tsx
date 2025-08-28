import { UseSelector, useDispatch, useSelector } from "react-redux";
export default function HelloRedux() {
    const {message} = useSelector((state:any) => state.helloReducer);
    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}