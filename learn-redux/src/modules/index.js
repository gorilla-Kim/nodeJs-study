/*  
    root reducer 만들기 
    복수개의 reducer를 하나로 합쳐서 사용할때 사용.
*/
import { combineReducers } from 'redux';
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;