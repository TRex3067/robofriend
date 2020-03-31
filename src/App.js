import React,{Component} from 'react';
import CardList from './CardList'
import { robots } from './6.2 robots.js';
import SearchField from './SearchField';
import Scroll from './Scroll';

class App extends Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>{this.setState({robots: users})});
    }
    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value});
    };    
    render() {
        const filteredRobots= this.state.robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                <SearchField searchChange={this.onSearchChange}/>
                <Scroll >
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}
export default App;