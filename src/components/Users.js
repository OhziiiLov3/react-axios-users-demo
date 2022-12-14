import axios from 'axios';
import React, {useEffect, useState} from 'react'

const Users = () => {
const [post,setPost] = useState([]);

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      console.log(data);
      setPost(data?.data)
    });
},[]);

  return (
    <div>
        <h1>React Axios - Users Page</h1>
    Users
    {post.map((item,idx)=>{
        return(
            <div key={idx}>
                <p>{item?.name}</p>
            </div>
        )
    })}
    </div>
  )
}

export default Users