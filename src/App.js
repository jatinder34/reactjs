import React, { Component } from 'react';
import TestingList from './components/TestingList';
import TestingForm from './components/TestingForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.changeStatus = this.changeStatus.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.state = {
      employes:[{
        name:'Jatin',
        completed:false
      },
      {
        name:'Sanju',
        completed:false
      },
      {
        name:'Shiv',
        completed:false
      },
      {
        name:'Ravi',
        completed:false
      }
    ],
    currentemploy:'Hello',
    }
  }
  updateStatus(newEmploy){
    this.setState({
      currentemploy:newEmploy.target.value
    })
  }

  changeStatus(index){
    var employes = this.state.employes;
    var employe = employes[index];
    employe.completed = !employe.completed;
    this.setState({
      employes:employes
    })
  }

  render() {
    return (
      <section>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <div className="addName">
              <TestingForm 
                currentemploy={this.state.currentemploy}
                updateStatus={this.updateStatus}
              />
            </div>
            <ul className="info-user">
              {
                this.state.employes.map((employe, index) => {
                  return <TestingList key={employe.name} clickHandler={this.changeStatus} index={index} info={employe}/>
                })
              }
            </ul>
          </header>
        </div>
      </section>
    );
  }
}

export default App;
