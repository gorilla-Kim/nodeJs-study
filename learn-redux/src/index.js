import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Provider를 이용해서 react 프로젝트에서 redux를 적용할 수 있다.
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

// Store 생성하기, reducer는 rootReducer로
const store = createStore(rootReducer, composeWithDevTools());

// Provider와 이 안에서 props를 통해 store를 사용이 가능하다.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
