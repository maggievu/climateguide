import React, {Component} from 'react';
import {connect} from 'react-redux';
import {first} from '../../actions';
import {second} from '../../actions';
import {third} from '../../actions';
import {prevSection} from '../../actions';
import {nextSection} from '../../actions';

class Section extends Component {
    render() {
        return (
            <section className={'section section-' + this.props.id}>
                <h2 className='section-title'>{this.props.id}</h2>
                <div className="img-container">
                    <div className="img-description">
                        <h3>{this.props.contentH3}</h3>
                        <p>{this.props.content}</p>
                    </div>
                    <img src={this.props.imgSrc} alt={this.props.id + " " + this.props.contentH3} />
                </div>
                <button id='first' onClick={this.props.first}></button>
                <button id='second' onClick={this.props.second}></button>
                <button id='third' onClick={this.props.third}></button>
                <button id='prev' onClick={this.props.onPrev}><span className='fas fa-chevron-left'></span></button>
                <button id='next' onClick={this.props.onNext}><span className='fas fa-chevron-right'></span></button>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    id: state.id,
    contentH3: state.contentH3,
    content: state.content,
    imgSrc: process.env.PUBLIC_URL + state.imgSrc
});

const mapDispatchToProps = dispatch => ({
    first: () => dispatch(first()),
    second: () => dispatch(second()),
    third: () => dispatch(third()),
    onPrev: () => dispatch(prevSection()),
    onNext: () => dispatch(nextSection())
});

export default connect(mapStateToProps, mapDispatchToProps)(Section);
