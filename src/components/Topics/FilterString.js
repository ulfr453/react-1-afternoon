import React, {Component} from 'react'

export default class FilterString extends Component {
    constructor(){
        super();
        this.state= {
            unfilteredArray: ['cam', 'andrea', 'leilani'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val});
    }

    filteredArray(userInput){
        let unfilteredArray = this.state.unfilteredArray;
        let filteredArray = [];

        for(let i = 0; i < unfilteredArray.length; i++){
            if(unfilteredArray[i].includes(userInput)){
                filteredArray.push(unfilteredArray[i]);
            }
        }
        this.setState({ filteredArray: filteredArray});
    }



    render(){
        return(
            <div className= 'puzzleBox filterSTringPB'>
                <h4> Filter String </h4>
                <span className= 'PuzzleText'> unfilteredArray: { JSON.stringify(this.state.unfilteredArray,null,10)} </span>
                <input className= 'inputLine' onChange= {(e) => this.handleChange(e.target.value)}></input>
                <button className= 'confirmationButton' onClick= { () => this.assignFilteredArray(this.state.userInput)} > Filter </button>
                <span className= 'resultsBox filterStringRB'> Filtered Array: //{JSON.stringify(this.state.filteredArray, null,10)} </span>
            </div>
        )
    }
}