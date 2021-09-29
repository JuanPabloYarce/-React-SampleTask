import React from 'react';
import './App.css';

/* function Helloworld (props){
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
      </div>
  )
} */

class Helloworld extends React.Component{

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if(this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle show</button>
        </div> 
       )
      }
      else {
        return <h1>
          There are no elements
          <button onClick={this.toggleShow}>Toggle show</button>
          </h1>
      }
    }
  }

//Todos son enfoques similares
/*
const App1 = () => <div>This is my component: <Helloworld/><Helloworld/></div>

class App extends React.Component{
  render (){
    <div>This is my component: <Helloworld/></div>
  }
}
*/

function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hello papulince" subtitle="Lorep ipsum"/>
      <Helloworld mytext="hola mundo" subtitle="component2"/>
      <Helloworld mytext="Hello" subtitle="asdasd"/>
    </div>
    
  );
}

export default App;
