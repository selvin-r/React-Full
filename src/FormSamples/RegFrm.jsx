import React, { useState } from 'react';
import "./RegFrm.css";

export const RegFrm = () => {

    const [user, setUser] = useState({
        name: "Selvin Kumar",
        age: 23,
        gender: "male",
        isMarried: true,
        country: "India",
        bio: "Write something about yourself",
    });

    function changeHandler(e) {
        const { name, value, type, checked } = e.target;

        setUser({
            ...user,
            [name]: type === "checkbox" ? checked : value
        });

        console.log(name, type === "checkbox" ? checked : value);
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>Married</td>
                        <td>{user.isMarried ? "Married" : "Not Married"}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{user.country}</td>
                    </tr>

                    <tr>
                        <td>Bio</td>
                        <td>{user.bio}</td>
                    </tr>
                </tbody>
            </table>

            <form>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={user.name}
                    name="name"
                    onChange={changeHandler}
                />

                <input
                    type="number"
                    placeholder="Age"
                    value={user.age}
                    name="age"
                    onChange={changeHandler}
                />

                <div className="gender">
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={user.gender === "male"}
                            onChange={changeHandler}
                        />
                        Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={user.gender === "female"}
                            onChange={changeHandler}
                        />
                        Female
                    </label>
                </div>

                <label>
                    <input
                        type="checkbox"
                        name="isMarried"
                        checked={user.isMarried}
                        onChange={changeHandler}
                    />
                    Is Married
                </label>

                <div className='select_div'>
                    <label htmlFor="country">Select Country</label>
                    <select name="country" id="country" value={user.country} onChange={changeHandler}>
                        <option value="USA">USA</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="UAE">UAE</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>

                    </select>
                </div>

                <textarea name="bio" id="bio" cols="30" rows="10" placeholder='Write About You' value={user.bio} onChange={changeHandler}></textarea>
            </form>
        </>
    );
};
