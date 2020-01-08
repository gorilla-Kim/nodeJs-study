// createStore = Store를 생성시켜주는 함수
import { createStore } from "redux";

const initialState = {
    counter: 0,
    text: '',
    list: []
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

const increase = () => ({
    type: INCREASE,
});

const decrease = () => ({
    type: DECREASE,
});

const changeText = (text) => ({
    type: CHANGE_TEXT,
    text
});

const addToList = (item) => ({
    type: ADD_TO_LIST,
    item
});


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }

        default: 
            return state;
    }
}

// 스토어 생성
const store = createStore(reducer);

const listener = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("Hello!!"));
store.dispatch(addToList({ id: 1, text: "apple" }));

// 윈도우의 store를 방금 생성한 store로 사용
window.store = store;