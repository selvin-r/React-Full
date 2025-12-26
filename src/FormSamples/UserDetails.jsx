import React, { useState } from 'react'

export const UserDetails = () => {

    // Normal Types
    // const [UserName,setUserName]=useState("Ram");
    // const [UserAge,setUserAge]=useState(23);

    // Object types 

    const [User, setUser] = useState({
        "name": "Ram",
        "age": 23

    })


    // function changename(e){
    //     // const newStateObject ={...User};
    //     // newStateObject.name=e.target.value;
    //     // setUser(newStateObject);


    //     setUser((oldState)=>{
    //         return {...oldState,name:e.target.value};
    //     })
    // }


    // function changeage(e){

    //     // Tow Way Posible
    //     // setUser((oldState)=>{
    //     //     return {...oldState,age:e.target.value};
    //     // })

    //     // const newStateObject ={...User};
    //     // newStateObject.age=e.target.value;
    //     // setUser(newStateObject);
    // }

    // const updateUserName = () => {
    //     // setUserName("Selvin");
    //     // UserName =="Ram" ? setUserName("Selvin") : setUserName("Ram");

    //     setUser({ ...User, name: "Selvin" });
    // };
    // const updateUserAge = () => {
    //     // setUserAge(24);
    //     // UserAge ==23 ? setUserAge(24) : setUserAge(23);
    //     setUser({ ...User, age: 24 });
    // };



    /*


    Only One Function Two Varible 
    
    
    
    
    */


    function changeHandler(e){
   

        setUser({...User,[e.target.name]:e.target.value});
    }

    return (
        <>

            {/* <h1>User Details</h1>
            <h3>{User.name}</h3>
            <h3>{User.age}</h3>
            <button onClick={updateUserName}>Update Name</button>
            <button onClick={updateUserAge}>Update Age</button> */}

          <h2>

            {User.name},
            {User.age}
          </h2>

            <form action="">

                <input type="text"  placeholder='Enter the Name' onChange={changeHandler} name="name"/>
                <input type="text" placeholder='Enter the Age'  onChange={changeHandler} name="age"/>
            </form>


        </>
    );
};


