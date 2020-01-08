import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();
        this.state= {
            userInput= '',
            palindrome= ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }


    palindrome(userInput){
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');
    
        if ( forwards === backwards ) {
          this.setState({ palindrome: 'true' });
        } else {
          this.setState({ palindrome: 'false' });
        }
    }

    render(){
        return(
            <div className= 'puzzleBox filterStringPB'>
                <h4> Palindrome </h4>
                <input className= 'inputLine' onChange= {(e) => handleChange(e.target.value)} ></input>/>
                <button className= 'confirmationButton' onClick= {() => this.state.isPalindrome(this.state.userInput)} > Check </button>/>
                <span className= 'resultsBox'> Palindrome: {JSON.stringify(this.state.palindrome)}</span>/>

            </div>   
            )
    }
}