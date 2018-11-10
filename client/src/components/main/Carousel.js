import React, {Component} from 'react';
import Section from './Section';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducers';

const store = createStore(reducer);
console.log(store.getState());

class Carousel extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="carousel">
                    <Section />
                </div>
            </Provider>
        );
    }
}

export default Carousel;
