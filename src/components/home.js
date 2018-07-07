import React, { Component } from 'react';


class Home extends Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        console.log('mount',this.props);
        this.props.apiRequest();

    }

     componentDidUpdate(){
       console.log('update',this.props)
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/albums')
    //         .then((response)=>response.json())
    //         .then(data=>{
    //         console.log(data);
    //         })
    //
    //         .catch((error)=>{
    //         console.log('blad')
    //         })
    //
    // }

    render() {
        return (
            <div>
                <h1>Redux zadanie API</h1>
                <div className="api"></div>

            </div>
        );
    }
}

export default Home;
