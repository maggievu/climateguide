import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './redux/reducers';
import App from './redux/components/App';

const store = createStore(rootReducers);
console.log(store);

export default class Redux extends Component {
    render() {
        return (
            <div>
            <h1>hiiiiiii</h1>
            <Provider store={store} value={store.getState()}>
            <App />
            </Provider>
            </div>
        );
    };
}
