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

  deleteItem=(id)=>{
    let items=this.state.items; 
    let i=items.findIndex(item=>item.id===id) 
    items.splice(i,1) 
    this.setState({
      items:items
    })
    
  }
  render(){
    return (
      <div className="App"> 
       Todo List App
       <Todoitems items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
  
}

export default App;
