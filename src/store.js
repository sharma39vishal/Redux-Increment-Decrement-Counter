import rootReducer from "./Redux/Reducer";
import { createStore } from "redux";

const store= createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;