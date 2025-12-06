import { useState } from 'react'
import LearnComponents from './Components/LearnComponents'
import Student from './Components/Student'
import ChildComponent from './Components/ChildComponent'
import ArraySamples from './Components/ArraySamples'



function App() {
  const [count, setCount] = useState(0)


  const items =[

    {id:1,name: "Items 1"},
    {id:2,name: "Items 2"},
    {id:3, name: "Items 3"},
  ];

  return (
    <>
      <div>
        Hey Iam Selvin
        <LearnComponents/>
      </div>
       
       <Student name="JoJo" age={23} isMarried={true}/>
         <Student name="Jo" age={22} isMarried={false}/>


         <ChildComponent>


           <p>This is tha Sample Para 1</p>
           <p>This is tha Sample Para 2</p>
           <p>This is tha Sample Para 3</p>
            <p>This is tha Sample Para 3</p>
         </ChildComponent>

     

     <ArraySamples items={items}></ArraySamples>


    </>
  )
}

export default App
