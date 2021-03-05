import React,{Component} from 'react';

class Priceshow extends Component {

    constructor(){
        super();
        this.state = {}
    }

    componentDidMount(){

        console.log("Component has mounted")

    }

    render(){
        return (
            <div classname = "container">
                <h1>test test</h1>
            </div>
        );
    }
}

export default Priceshow;