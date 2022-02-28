import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
  }
  updateNumQuestions = () => {
    this.setState((currentState) => {
      return currentState.numQuestions = currentState.numQuestions + 1;
    })
  }
  updateNumCorrect = () => {
    this.setState((currentState) => {
      return currentState.numCorrect = currentState.numCorrect + 1;
    })
  }
  sumNums = (numArr) => {
    let total = 0;
    numArr.forEach((num) => {
      total = total + num;
    })
    return total;
  }    
  submitAnswer = (userSubmission) => {
    // Get correct answer, true or false
    const correctAnswer = this.sumNums([value1, value2, value3]) === proposedAnswer;   

    if (userSubmission === correctAnswer) {
      this.updateNumCorrect();
    }
    this.updateNumQuestions();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.submitAnswer(true)}>True</button>
          <button onClick={() => this.submitAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
