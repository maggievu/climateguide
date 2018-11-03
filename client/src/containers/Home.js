import React, {Component} from 'react';
import Header from "./../components/Header";
import Main from "./../components/Main";
import Footer from "./../components/Footer";

class Home extends Component {
    render() {
        return (
            <div id="home" className="site">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default Home
