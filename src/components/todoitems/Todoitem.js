import React from 'react'

const Todoitems=(props)=>{
    const {items,deleteItem}=props; 
    let length=items.length;
    const Listitems=length?items.map(item=>{
        return(
            
                <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick={()=>deleteItem(item.id)}>&times;</span>
              </div>
             
        )
    }):<div>there are nothing to show</div>
        
           
    
    
    
  return( 
      
      <div className="ListItems">
        <div> 
            
            <span>Name</span>
            <span>Age</span>
            <span>Action</span>
        </div>
        {Listitems}
      </div>
  )


}

export default Todoitems;