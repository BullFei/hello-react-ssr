import React, {Component} from 'react';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            arr: [1,2,3,4]
        }
    }
    sayHello() {
        alert('hello');
    }
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <button onClick={this.sayHello}>hello</button>
                <ul>
                    {this.state.arr.map(item => {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}
