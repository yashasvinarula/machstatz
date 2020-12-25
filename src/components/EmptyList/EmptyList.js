import React, { Component } from 'react'
import './styles.css';

export default class EmptyList extends Component {
    render() {
        return (
            <div className = 'empty-list'>
                <h2 style = {{textTransform: 'uppercase'}}>
                    The list is empty right now
                </h2>
                <h1>
                    :(
                </h1>
                <h5 style = {{cursor: 'pointer', color: '#ffdc00', textDecoration: 'underline'}} onClick = {() => this.props.changeTab('planets')}>
                    Add Some Planets to the List!
                </h5>
            </div>
        )
    }
}
