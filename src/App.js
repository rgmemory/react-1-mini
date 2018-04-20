import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      
      picture: '',
      name: '',
      friends: []
    }
  }





  updatePicture(value){
    this.setState({
      picture: value
    })
  }

  updateName(value){
    this.setState({
      name: value
    })
  }

  addFriend(){
    let tempArray = this.state.friends.slice(0);
    tempArray.push({name: this.state.name, picture: this.state.picture})
    this.setState({
      friends: tempArray,
      picture: "",
      name: ""
    })
  }








// const friends = this.state.friends.map(current => {
//   return(
//     <div>
//       <img src={current}
//     </div>
//   )
// })







  render() {

    const friends = this.state.friends.map((current, i) => {
      return(
        <div key={i + current.name}>
          <img src={current.picture} width="100px"/>
          <span>{current.name}</span>
        </div>
      )
    })

    return (
      <div className="App">
        <div>Picture:</div>
        <input type="text" onChange={(e) => {this.updatePicture(e.target.value)}} value={this.state.picture}/>
        <div>Name:</div>
        <input type="text" onChange={(e) => {this.updateName(e.target.value)}} value={this.state.name}/>
        <div>
          <button onClick={() => this.addFriend()}> Submit</button>
        </div>

        {friends}
      </div>
    );
  }
}

export default App;



