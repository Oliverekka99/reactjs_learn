// "use client";
// import React,{ useState } from "react";

// const page = () => {
//   const [Username, setUsername] = useState("")
//   return (
//     <>
//     <h1 className='mb-5 text-2xl'>Enter your name :</h1>
//       <form>
//         <input type='text' 
//         className='border-2 border-zinc-800 px-4 py-2 text-xl'
//         value={Username}
//         onChange = {(e) => {
//           setUsername(e.target.value)
//           console.log(Username);
//         }}
//         ></input>
//       </form>
//     </>
//   );
// };

// export default page

// import React from 'react'

// const page = () => {
//   return (
//     <>
//     <h1 className='text-2xl font-bold'>This is Home Page</h1>
//     <a href="/Contact">Contact</a>
//     </>
//   )
// }

// export default page

// "use client";
// import axios from 'axios';
// import React, { useState,useEffect } from 'react';
// import Link from 'next/link';

// const page = () => {
//   const [Users, setUsers] = useState([])
//   const getUsers = async () => {
//     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
//     setUsers(data)
//   }
//   useEffect(() => {
//    getUsers()
//   }, [])
  
//   return (
//     <>
//     <button onClick={getUsers} className='bg-green-600 text-white px-4 py-2 rounded font-bold'>Get Data</button>
//     <div className='p-8 bg-slate-100 mt-5'>
//       <ul>
//         {Users.map((e) => {
//           return <li>{e.username} --- <a href={`/${e.id}`}>Explore</a> </li>
//         })}
//       </ul>
//     </div>

//     </>
//   );
// };

// export default page

// "use client";
// import Header from '@/components/Header'
// import React,{useState} from 'react'

// const page = () => {
//     const [num, setnum] = useState(10);
//   return (
//     <div>
//         <Header num={num}/>
//     </div>
//   );
// };

// export default page;

// "use client";
// import Header from '@/Components/Header';
// import { MyContext } from '@/Helper/Context';
// import React, { useContext } from 'react'

// const page = () => {
//   const user = useContext(MyContext)
//   console.log(user);
//   Header
//   return (
//     <div>
//       {user}
//       <Header/>
//     </div>
//   )
// }

// export default page

// "use client";
// import React from 'react'
// import { ToastContainer,toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

// const page = () => {
//   const notify = () => {
//     toast("Login Success",{theme:"dark"});
    // toast(' 🤭 Wow so easy! 🤡', {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    //   });
//   }
//   return (
//     <div>
//       <button onClick={notify}>Login</button>
//       <ToastContainer/>
//     </div>
//   )
// }

// export default page;

"use client";
import React, {useState} from "react";
import axios from "axios";

const page = () => {
  const [Userdata, setUserdata] = useState("");
  const [num, setnum] = useState(10);
  const getdata = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    const a = JSON.stringify(response.data);
    console.log(a);
    setUserdata(a);
  };
  return (
    <div>
      <button onClick = {getdata}>clickme</button>
      {Userdata}
    </div>
  );
};

export default page;