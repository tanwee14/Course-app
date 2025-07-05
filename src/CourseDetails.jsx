import React from 'react';
import { useParams } from 'react-router-dom';
import Rating from './Rating';
import { useState,useEffect } from 'react';
import axios from "axios";

function CourseDetails() {
  const {id} = useParams()  
  const[course,setCourse]=useState(null)
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    axios.get(`http://localhost:3000/courses/${id}`)
    .then((res)=>{
      setCourse(res.data)
      setLoading(false)
    })
    .catch((err)=>{
      console.log("error occured")
      setLoading(true)
    })

  },[id])

  if (loading) return <div>Loading...</div>;
  if (!course) return <div>Course not found</div>;
  
  return (
    <div className="row my-1">
      <div className="col-md-9">
        <h1>{course.title}</h1>
        <img src={course.imageUrl} alt={course.title} width="100px" height  />
        <p>{course.description}</p>
        <p>Price: ₹{course.price}</p>
        <p>Likes: {course.likes}</p>
        <p>Rating: <Rating rating={course.rating} /></p> 
      </div>
    </div>
  );
}

export default CourseDetails;
