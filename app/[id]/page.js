
"use client";
import axios from 'axios';
import React, { useState,useEffect } from 'react';

const page = ({params}) => {
  const { id } = params; 
  const [Users, setUsers] = useState([])
  const getUsers = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
    setUsers(data)
  }
  useEffect(() => {
   getUsers()
  }, [])
  return (
    <div>{JSON.stringify(Users)}</div>
  )
}

export default page; 