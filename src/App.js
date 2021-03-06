import React ,{Component} from 'react'
import './App.css';
import Todoitems from './components/todoitems/Todoitem';
class App extends Component { 

  state={
    items:[
      {id:0,name:"Moaid",age:21},
      {id:1,name:"Ibrahim",age:22},
      {id:2,name:"Yasser",age:20}
      
  ]
  }
  render(){
    return (
      <div className="App"> 
       Todo List App
       <Todoitems items={this.state.items}/>
      </div>
    );
  }
  
}

export default App;
