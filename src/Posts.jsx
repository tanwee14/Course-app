import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Posts(){
    const[posts,setPosts]= useState([]);
    useEffect(function(){
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>setPosts(res.data));
    },[]);

    return(
        <>
        <h1>ALL POSTS</h1>
        <ul>
            {posts.map(p=>(
                <li>{p.title}</li>
            ))}
        </ul>
        </>
    );

}





export default Posts;