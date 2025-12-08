
import React from 'react'

const ArraySamples = (props) => {

    const {items} =props;
  return 
  (
    <div>ArraySamples

        <h1>This is tha Array Of samples</h1>

        <ul>

            {items.map((items)=> (

                <li key={items.id}>{items.name}</li>
            ))}
        </ul>
    </div>
    
  )
}

export default ArraySamples