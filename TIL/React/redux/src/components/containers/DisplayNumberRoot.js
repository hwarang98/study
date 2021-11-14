import DisplayNumber from '../DisplayNumber';
// import { connect } from 'react-redux';

// export default connect()(DisplayNumber);


import React,{ Component } from 'react';
import store from '../../store';

export default class extends Component{
    state = {number:store.getState().number}
    constructor(props){
        super(props);
        store.subscribe(() => {
            this.setState({number:store.getState().number})
        })
    }
    render(){
        return(
        <div>
            <DisplayNumber number={this.state.number} unit={this.props.unit}/>
        </div>
        ) 
    }
}
