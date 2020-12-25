import React, { Component } from 'react';
import './styles.css';
import {connect} from 'react-redux';
import {addFavourite} from '../../actions';

class ListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            value: '',
            isFavourite: false,
        }
        this.toggleFavourite = this.toggleFavourite.bind(this);
    }

    componentDidMount(){
        const { id, value, isFavourite} = this.props;
        this.setState({
            id,
            value,
            isFavourite
        })
    }

    componentDidUpdate(props, state){
        if(state.isFavourite !== this.props.isFavourite){
            this.setState({
                isFavourite: this.props.isFavourite
            });
        }
    }

    toggleFavourite = (e) => {
        const {id, value, isFavourite} = this.state;
        this.props.addFavourite({
            id,
            isFavourite: !isFavourite,
            name: value,
        });
    }

    render() {
        const {value, isFavourite} = this.state;
        return (
            <div className = 'list-item'>
                <span className = 'list-value'>
                    {value}
                </span>
                <div className = 'list-favourite' onClick = {() => this.toggleFavourite()}>
                    {
                        isFavourite ? (<div style = {{color: 'gold'}}>
                            &#9733;
                        </div>) : (<div>
                            &#9734;
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default connect(null, {addFavourite})(ListItem);