"use client";

import UsersList from "@/components/UsersList";
import { useState } from "react";
import { User } from "@/types/types";

export default function Home() {

  const [users, setUsers] = useState<User[]>([]);

  const createUser = async () => {
    console.log('Adding user');
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    if (!name && !email) {
      console.error("Name or email is required");
      return;
    }
    fetch(process.env.NEXT_PUBLIC_API_URL + "/v1.0/users/create-user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            console.log(data)
          })
        }
        else {
          console.error("Error creating user");
        }
      });
  }

  const deleteUser = async () => {
    console.log("Deleting user");
  
    const idToDelete = (document.getElementById("userId") as HTMLInputElement).value;
  
    if (!idToDelete) {
      console.error("User ID is required");
      return;
    }
  
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/v1.0/users/delete-user", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: idToDelete }),
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const data = await response.json();
      console.error(data.error);
    }
  };

  const getAllUsers = async () => {
    console.log('Getting all users');
    fetch(process.env.NEXT_PUBLIC_API_URL + "/v1.0/users/get-all-users", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setUsers(data);
            console.log(users);
          })
        }
        else {
          console.error("Error getting users");
        }
      });
  }

  const changeUser = async () => {
    console.log('Changing user');
    const userId = (document.getElementById("userId") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    if (!userId) {
      console.error("User ID is required");
      return;
    }
    if (!name && !email) {
      console.error("Name or email is required");
      return;
    }
    fetch(process.env.NEXT_PUBLIC_API_URL + "/v1.0/users/change-user", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        name: name,
        email: email,
      }),
    })
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data)
        })
      }
      else {
        response.json().then((data) => {
          console.error(data.error)
        })
      }
    });
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {process.env.NEXT_PUBLIC_VARIABLE_FOR_CLIENT}
        {users.length>0 &&<UsersList users={users} />}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
        <input id="userId" name="userId" type="text" placeholder="Enter UserId" className="border border-gray-300 rounded-md p-2" />
        <input id="name" name="name" type="text" placeholder="Enter Name" className="border border-gray-300 rounded-md p-2" />
        <input id="email" name="email" type="text" placeholder="Enter Email" className="border border-gray-300 rounded-md p-2" />

        <button onClick={createUser} className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">
          Create User
        </button>
        <button onClick={deleteUser} className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">
          Delete User
        </button>
        <button onClick={changeUser} className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">
          Change User
        </button>
        <button onClick={getAllUsers} className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">
          Get All User
        </button>
        
      </footer>
    </div>
  );
}
