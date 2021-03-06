import React from 'react'

const Todoitems=(props)=>{
    const {items}=props; 
    const Listitems=items.map(item=>{
        return(
            <div key={item.id}>
              <span>{item.name}</span>
              <span>{item.age}</span>
              <span>&times;</span>
            </div>
        )
    })
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