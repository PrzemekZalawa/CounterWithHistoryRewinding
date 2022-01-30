import ReactDOM from 'react-dom';
import './index.css';
import React from "react";
import react from 'react';
import reactDom from 'react-dom';

//Przemek Zaława 3F

class Button extends react.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      history:[   ]
    }
    this.handleClick = this.handleClick.bind(this);
    this.rewind = this.rewind.bind(this);

  }
  rewind(essa){
    
    
    const rigcz = this.state.history
    
    const eniu = rigcz.slice(0,essa)
    
    this.setState({history:eniu})
    this.setState({
      value:essa
    })

  }
  
  handleClick(){
    const cos = this.state.history
    
    cos.push(this.state.value)
    
    this.setState({history:cos})

    const x = this.state.value+1
    this.setState({value: x})

  }

  render(){

  const myArrCreatedFromMap = this.state.history.map((item, i) =>
   (<li key={item + i}>
   <button className='historyButton' onClick={()=>this.rewind(item)}>{item}</button>
   </li>));

  const myList = (
  <ul>{myArrCreatedFromMap}</ul> )
    

    return(
      <div>
        <h1>Licznik ale jak sie pomylisz to możesz się cofnąc </h1>
        <button className='mainButton' onClick={this.handleClick}>{this.state.value}</button>
        {myList} 
      </div>
    )
  }
}


ReactDOM.render(<Button/>, document.getElementById('root'));
