import React from 'react'

const Header = () => {

  let CustomCss="code";
  let islogin=true;

  let greeting = islogin ? <p>Welcome back</p> : <p>Please Login</p>;


  let items =["item1","item2","item3","items4"];

  return
   (

    <>

      <div className='name'>
        Selvin
      </div>
      <h1 className='name1'>Iam A Header Componants</h1>

      {/* JavaScript Expression in jsx */}

      <p className={CustomCss}>25+25={25+25}</p>



      {/* JSX With Conditional Rendering */}

   {greeting}

{/*JSX With Lists */}


<ul>

 {items.map((item,index)=>(

  <li key={index}>{item}</li>
 ))}

</ul>

    </>
  )
}

export default Header
