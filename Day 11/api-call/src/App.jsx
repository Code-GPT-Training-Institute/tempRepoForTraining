import { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'

function App() {
  
  let [users, setUsers] = useState([]);

  // let [user, setUser] = useState({
  //   name: '',
  //   phoneNo: 0
  // });

  // let onInit = async () => {
  //   // refresh();
  //   await fetch("https://reqres.in/api/users?page=1", {
  //     method: "GET"
  //   }).then((data) => {
  //     setUsers(data.data.data);
  //   }).catch((error) => {
  //     alert("Unable to fetch data");
  //   })
  // }

  // let onInit = () => {
  //   axios.get("https://reqres.in/api/users?page=1")
  //   .then((response) => {
  //     console.log(response.data.data);
  //     setUsers(response.data.data);
  //   }).catch(() => alert("Error"));
  // }

  useEffect(function() {
    axios.get("https://reqres.in/api/users?page=1")
        .then((response) => {
          console.log(response.data.data);
          setUsers(response.data.data);
        }).catch(() => alert("Error"));
    } , []);

  // function refresh() {
  //   const userString = localStorage.getItem('users');
  //   let userList = userString ? JSON.parse(userString) : [];
  //   setUsers(userList);
  // }

  // let saveUser = () => {
  //   users.push(user);
  //   localStorage.setItem('users', JSON.stringify(users));
  //   refresh();
    
  // }

  return (
    <>
    <div>
      {/* <label>Name</label>
      <input type = "text"
             onChange={ (evt) => setUser({...user, name: evt.target.value})}></input>
      <label>phoneNo</label>
      <input type = "number" 
             onChange={ (evt) => setUser({...user, phoneNo: evt.target.value})}></input>
      <button onClick={ saveUser } >save</button> */}

      {/* <ul>
        { users.map((element, index) => <li key={index} >{element.name}</li>) }
      </ul> */}

      <ul>
        { users.map(userObj =>
          <li key={userObj.id}>emailId: { userObj.email } name : {userObj.first_name + ' ' + userObj.last_name}</li>
        )}
      </ul>

    </div>
      
    </>
  )
}

export default App
