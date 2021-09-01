import { render } from "@testing-library/react";

const UsersList = () => {
    let users = [
      {
        id: 1,
        name: "Maaroufi",
        username: "Sami",
        email: "Maaroufisami15@gmail.com",
        
        }
    ];
    return (

    users.map((user) => (
    <div>
    <li class="list-group-item">{user.username}</li> 
  
    <li class="list-group-item">{user.name}</li> 
    </div>
   
       
    ))
    )


    }
export default UsersList
