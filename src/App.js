import React, { useState } from "react";

function App() { // here name ,age users,searchname , totalage statevariable. nd These functions are linked with the state variables name and age,etc.
 // When we call setName(newValue) or setAge(newValue), React updates the name or age state variable with the new value (newValue) you provide as an argument.
  const [name, setName] = useState(""); // useState is used to manage state within functional components. nd here app is acomponent
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [totalAge, setTotalAge] = useState(0);

  const handleNameChange = (e) => { //handleNameChange is used to update the name state variable with the value entered in the "Name" input field every time the user types something. nd here the handelnamechange function that takes an event object e as its parameter.
    setName(e.target.value); // here e.target.value define the current value entered in the input field, which is the user's name.
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);        //similarly
  };

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };
  //  event handler
  const addUser = () => { //  here adduser function is called  when user click add button
    if (name && age) { // here chk weather the name nd age have value?
      const newUser = { //here inside the function a new object create i.e newuser
        id: Date.now(), //here id -bcz eeach user in the list has a unique identifier nd date.now() it refers to current time
        name: name, 
        age: parseInt(age), // convert the age value in integer
      };

      setUsers([...users, newUser]); // here Update the user list and total age.
      setTotalAge(totalAge + parseInt(age));

      setName(""); // here clear the input field after adding
      setAge(""); 
    }
  };

  const deleteUser = (id, age) => { // The function takes two parameters id and age. These parameters refers the ID of the user to be deleted and the age of that user.
    setUsers(users.filter((user) => user.id !== id)); // here setusers is a function nd that provide to update the state variable (here users) nd filters the users array to create a new array nd that excludes the user with the specified id
    setTotalAge(totalAge - age); // here setTotalAge is a function nd that provides to update the total age . nd here substract the totalage to age bcz if we input two age nd thn if we dlt 1 age so (20 ,50 thn 20+50=70 , 70-20=50)
  };

  const filteredUsers = users.filter((user) => //array contains only the users whose names match the search area.Imagine we have a list of users with names like "saswati,"ipsita,"sangita,"sonali," The user interface includes a search input field where a user can enter a search query.
  user.name.toLowerCase().includes(searchName.toLowerCase())                                                  // If the user enters "sa" in the search field, then  users whose names contain "sa.then filteredUsers , filter the list and return an array with "saswati" or "sangita"
  );

  return (
    <div>
      <h1>User List</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={handleAgeChange}
        />
        <button onClick={addUser}>Add</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={handleSearchChange}
        />
      </div>
      <p>Total Age: {totalAge}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => deleteUser(user.id, user.age)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
