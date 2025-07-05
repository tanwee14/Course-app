import React from 'react';
import { useParams } from 'react-router-dom';
import courseData from './course';
import Rating from './Rating';

function CourseDetails() {
  const { id } = useParams();
  const course = courseData.find((c) => c.id === id);

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
