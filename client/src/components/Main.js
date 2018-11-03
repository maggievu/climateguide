import React, {Component} from 'react';
import Form from './form/Form';
// import ZoomLine from './charts/ZoomLine/ZoomLine';
import ZoomScatter from './charts/ZoomScatter/ZoomScatter';

// import climateChange from './../images/climate-change.jpg';
import airPollution from './../images/air-pollution.jpg';
import deforestation from './../images/deforestation.jpg';
import coolingTower from './../images/cooling-tower.jpg';

class Main extends Component {
    render() {
        return (
            <main className="site-main">
                <h2>Global Warming</h2>
                {/*<img src={climateChange} alt="Topic Climate Change" />*/}

                <br/>
                <br/>
                <br/>
                <ZoomScatter />

                {/*<div id="zoomline"></div>*/}

                <h2 id="causes">Causes</h2>
                <div className="img-container">
                    <div className="img-description">
                        <h3>Air Pollution</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laudantium animi maiores totam minus sed itaque tempora deleniti, dolore quis necessitatibus earum eveniet, asperiores suscipit maxime doloremque ipsa. Error esse molestias at natus nisi facilis debitis ratione enim doloribus, eius dolore quas asperiores ipsam consequuntur distinctio soluta voluptatibus labore non.</p>
                    </div>
                    <img src={airPollution} alt="Cause Air Pollution" />
                </div>

                <h2 id="effects">Effects</h2>
                <div className="img-container">
                    <div className="img-description">
                        <h3>Deforestation</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laudantium animi maiores totam minus sed itaque tempora deleniti, dolore quis necessitatibus earum eveniet, asperiores suscipit maxime doloremque ipsa. Error esse molestias at natus nisi facilis debitis ratione enim doloribus, eius dolore quas asperiores ipsam consequuntur distinctio soluta voluptatibus labore non.</p>
                    </div>
                    <img src={deforestation} alt="Effect Deforestation" />
                </div>

                <h2 id="solutions">Solutions</h2>
                <div className="img-container">
                    <div className="img-description">
                        <h3>Cooling Towers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laudantium animi maiores totam minus sed itaque tempora deleniti, dolore quis necessitatibus earum eveniet, asperiores suscipit maxime doloremque ipsa. Error esse molestias at natus nisi facilis debitis ratione enim doloribus, eius dolore quas asperiores ipsam consequuntur distinctio soluta voluptatibus labore non.</p>
                    </div>
                    <img src={coolingTower} alt="Solution Cooling Towers" />
                </div>

                <h2 id="contact">Contact Us</h2>
                <Form />
            </main>
        );
    }
}

export default Main
