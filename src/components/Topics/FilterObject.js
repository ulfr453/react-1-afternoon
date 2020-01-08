import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();
        this.state= {
            employees:[
                {'name': 'cam', 'age': '30'}, 
                {'name': 'andrea', 'orgin': 'Colombia'}], 
            // {'name': 'leilani', 'age': '1', 'title': 'baby'}],
            userInput: '',
            filteredEmployees: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }


    filteredEmployees(prop){
        let employees = this.state.employees;
        let filteredEmployees = [];

        for ( let i = 0; i< employees.length; i++ ) {
            if ( employees[i].hasOWnProperty(prop) ) {
                filteredEmployees.push(employees[i]);
            }
        }

        this.setState({ filteredEmployees: filteredEmployees });


    }
    render(){
        return(
            <div className= 'puzzleBox filterObjectPB'>
                <h4> Filter Object </h4>
                <span className= 'puzzleText'> Original: {(this.state.unFilteredArray)}</span>
                <input className= 'inputLine' onChange= {(e) => this.handleChange(e.target.value)}></input>
                <button className= 'confirmationButton' onClick= { () => this.assignFilteredEmployees(this.state.userInput)}> Filter </button>
                <span className= 'resultsBox filterObjectRB'>Filtered: {(this.state.filteredEmployees, null, 10)}</span>
            </div>
        )
    }
}