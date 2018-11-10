import React, {Component} from 'react';
import Form from '../form/Form';
import Carousel from './Carousel';
import ZoomScatter from '../charts/ZoomScatter/ZoomScatter';

// import climateChange from './../images/climate-change.jpg';

class Main extends Component {
    render() {
        return (
            <main className="site-main">
                <section className='section section-global-warming'>
                    <h2 className='section-title'>Global Warming</h2>
                    <ZoomScatter />
                </section>

                <Carousel />

                <section className='section section-contact'>
                    <h2 className='section-title'>Contact Us</h2>
                    <Form />
                </section>
            </main>
        );
    }
}

export default Main
