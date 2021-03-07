import React ,{Component} from 'react'
import './App.css';
import Todoitems from './components/todoitems/Todoitem'; 
import Additem from './components/Additem/Additem'
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
  addItem=(item)=>{ 
    item.id=Math.random()
    let items=this.state.items;
    items.push(item)
    this.setState({
      items
    })

  }
  render(){
    return (
      <div className="Appcontainer"> 
       <h1 className="text-center">Todo List App</h1>
       <Todoitems items={this.state.items} deleteItem={this.deleteItem}/> 
       <Additem addItem={this.addItem}/>
      </div>
    );
  }
  
}

export default App;
