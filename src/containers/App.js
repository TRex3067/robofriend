import React,{Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList'
import SearchField from '../components/SearchField';
import Scroll from '../components/Scroll';
import {setSearchField,requestRobots} from '../actions.js'

const mapStateToProps=(state)=>{
    return ({
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    });
}

const mapDispatchToProps=(dispatch)=>{
    return {
    onSearchChange: (event)=>{
        return dispatch(setSearchField(event.target.value))},
    onRequestRobots: ()=>requestRobots(dispatch)
}};

class App extends Component{
    componentDidMount() {
        this.props.onRequestRobots();
    }    
    render() {
        const {searchField,onSearchChange,robots,isPending}=this.props;
        const filteredRobots= robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length?<h1>Loading</h1>:(
            <div className="tc">
                <SearchField searchChange={onSearchChange}/>
                <Scroll >
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);