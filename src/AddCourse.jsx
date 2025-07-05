import React, { useState } from 'react';

function AddCourse({ onCourseAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    rating: "",
    likes: "",
    imageUrl: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/courses/addCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error("Failed to add course");

      const newCourse = await res.json();
      alert("Course added successfully!");
      onCourseAdded(newCourse); // Optional: update parent list
      setFormData({ title: "", rating: "", likes: "" , imageUrl: "",description: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to add course");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Course</h3>
      <input type="text" name="title" value={formData.title} placeholder="Title" onChange={handleChange} required />
      <input type="text" name="description" value={formData.description} placeholder="Description" onChange={handleChange} required />
      <input type="text" name="imageUrl" value={formData.imageUrl} placeholder="Image URL" onChange={handleChange} required />
      <input type="number" name="price" value={formData.price} placeholder="Price" onChange={handleChange} required />
      <input type="number" name="rating" value={formData.rating} placeholder="Rating (optional)" onChange={handleChange} />
      <input type="number" name="likes" value={formData.likes} placeholder="Likes (optional)" onChange={handleChange} />
      <button type="submit">Add Course</button>
    </form>
  );
}

export default AddCourse;
