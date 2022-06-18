import React from 'react';

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }
    render(){
        return(<p>State change. It is {this.state.date.toLocaleTimeString()}!</p>);
    }
}

export default Clock;