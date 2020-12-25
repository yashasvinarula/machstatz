import React, { Component } from 'react';
import './styles.css';

import ListItem from '../ListItem';
import EmptyList from '../EmptyList/EmptyList';

export default class Tabs extends Component {

    constructor(props){
        super(props);
        this.state = {
            planets: [],
            favourites: [],
            active_tab: 'planets',
            active_list: []
        };

        this.changeTab = this.changeTab.bind(this);
    }

    componentDidMount(){
        // this.changeTab('planets');
        // const {planets, favourites} = this.props;
        // this.setState({
        //     // planets,
        //     // favourites,
        //     active_list: planets
        // })
    }

    componentDidUpdate(props, state){
        if(state.planets !== props.planets){
            this.setState({
                planets: props.planets, 
                favourites: props.favourites,
                active_list: state.active_tab === 'planets' ? props.planets : props.favourites

            });
        }
    }

    changeTab = tab => {
        const {active_tab, favourites, planets} = this.state;
        if(tab !== active_tab){
            this.setState({active_tab: tab});
            if(tab === 'planets'){
                this.setState({active_list: planets});
            }else{
                this.setState({active_list: favourites});
            }
        }
    }

    render() {
        const {active_tab, active_list} = this.state;
        return (
            <div className = 'tab-container'>
                <div className = 'tab-titles'>
                    <div 
                        className = {active_tab === 'planets' ? 'tab-title tab-title-active' : 'tab-title'}
                        onClick = {(tab) => this.changeTab('planets')}
                    >
                        Planets
                    </div>
                    <div 
                        className = {active_tab === 'favourites' ? 'tab-title tab-title-active' : 'tab-title'}
                        onClick = {(tab) => this.changeTab('favourites')}
                    >
                        Favourites
                    </div>
                </div>
                <div className = 'tab-body'>
                    {
                        active_list.map(item => 
                            <ListItem 
                                key = {item.id}
                                id = {item.id} 
                                value = {item.name} 
                                isFavourite = {item.isFavourite} 
                            />
                        )
                    }
                    {
                        active_list.length === 0 && (
                            <div>
                                <EmptyList changeTab = {this.changeTab} />
                            </div>
                        ) 
                    }
                </div>
            </div>
        )
    }
}
