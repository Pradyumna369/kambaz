import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterReducer/counterReducer";
import addReducer from "../Lab4/ReduxExamples/AddReducer/addReducer";
const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
    },
});
export default store;