import ClickEvent from "./ClickEvent";
import ClickEventDup from "./ClickEventDup";
import EventObject from "./PassingDataOnEvent";
import Counter from "./Counter";
import ParentStateComponent from "./ParentStateComponent";
import './index.css';
import ReduxExamples from "./ReduxExamples";
import store from "../store";
import { Provider } from "react-redux";
export default function Lab4() {
    return (
        <Provider store = {store}>
        <div>
            <h2>
                Lab 4
            </h2>
            <ClickEvent/>
            <ClickEventDup/>
            <EventObject/>
            <Counter/>
            <ParentStateComponent />
            <ReduxExamples/>
        </div>
        </Provider>
    );
}