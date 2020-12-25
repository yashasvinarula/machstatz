import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

import Tabs from './components/Tabs';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            planets: [],
            favourites: []
        };
    }

    componentDidMount(){
        // this.props.setPlanets(planets);
        this.setState({
            planets: this.props.planets
        })
    };

    componentDidUpdate(props, state){
        if(this.state.planets !== this.props.planets){
            this.setState({planets: this.props.planets});
        }
        if(this.state.favourites !== props.favourites){
            this.setState({favourites: this.props.favourites});
        }
    }

    render() {
        const {planets, favourites} = this.state;
        return (
            <div className = 'app'>
                <h1>Hello Planets</h1>
                <Tabs
                    planets = {planets}
                    favourites = {favourites}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        planets: state.planets,
        favourites: state.favourites
    }
}

export default connect(mapStateToProps, null)(App);