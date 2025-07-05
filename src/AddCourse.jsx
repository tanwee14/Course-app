import React, { useState } from 'react';

function AddCourse({ onCourseAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: "",
    likes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      onCourseAdded?.(newCourse);
      setFormData({
        title: "",
        description: "",
        imageUrl: "",
        price: "",
        rating: "",
        likes: ""
      });
    } catch (err) {
      console.error(err);
      alert("Failed to add course");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <div className="card border-0 shadow-lg" style={{ borderRadius: '16px' }}>
              
              {/* Header */}
              <div className="card-header bg-white border-0 text-center py-4" style={{ borderRadius: '16px 16px 0 0' }}>
                <div className="d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ 
                       width: '64px', 
                       height: '64px', 
                       backgroundColor: '#f8f0f5', 
                       borderRadius: '16px' 
                     }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d63384" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="fw-bold mb-2" style={{ color: '#2d3748', fontSize: '1.75rem' }}>
                  Create New Course
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>
                  Add comprehensive course details to enhance learning experience
                </p>
              </div>

              {/* Form Body */}
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    
                    {/* Course Title */}
                    <div className="col-12">
                      <label className="form-label fw-semibold mb-2" style={{ color: '#4a5568' }}>
                        Course Title
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter course title"
                        required
                        style={{
                          border: '2px solid #e2e8f0',
                          borderRadius: '12px',
                          fontSize: '1rem',
                          padding: '0.875rem 1rem',
                          transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d63384'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>

                    {/* Description */}
                    <div className="col-12">
                      <label className="form-label fw-semibold mb-2" style={{ color: '#4a5568' }}>
                        Course Description
                      </label>
                      <textarea
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Provide detailed course description"
                        rows="4"
                        required
                        style={{
                          border: '2px solid #e2e8f0',
                          borderRadius: '12px',
                          fontSize: '1rem',
                          padding: '0.875rem 1rem',
                          resize: 'vertical',
                          transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d63384'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>

                    {/* Image URL */}
                    <div className="col-12">
                      <label className="form-label fw-semibold mb-2" style={{ color: '#4a5568' }}>
                        Course Image URL
                      </label>
                      <input
                        type="url"
                        className="form-control form-control-lg"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="https://example.com/course-image.jpg"
                        required
                        style={{
                          border: '2px solid #e2e8f0',
                          borderRadius: '12px',
                          fontSize: '1rem',
                          padding: '0.875rem 1rem',
                          transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d63384'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>

                    {/* Price and Rating Row */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold mb-2" style={{ color: '#4a5568' }}>
                        Course Price ($)
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="99.00"
                        min="0"
                        step="0.01"
                        required
                        style={{
                          border: '2px solid #e2e8f0',
                          borderRadius: '12px',
                          fontSize: '1rem',
                          padding: '0.875rem 1rem',
                          transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d63384'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold mb-2" style={{ color: '#4a5568' }}>
                        Initial Rating
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        placeholder="4.5"
                        min="0"
                        max="5"
                        step="0.1"
                        style={{
                          border: '2px solid #e2e8f0',
                          borderRadius: '12px',
                          fontSize: '1rem',
                          padding: '0.875rem 1rem',
                          transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d63384'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>

                    {/* Initial Likes */}
                    <div className="col-12">
                      <label className="form-label fw-semibold mb-2" style={{ color: '#4a5568' }}>
                        Initial Likes Count
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        name="likes"
                        value={formData.likes}
                        onChange={handleChange}
                        placeholder="0"
                        min="0"
                        style={{
                          border: '2px solid #e2e8f0',
                          borderRadius: '12px',
                          fontSize: '1rem',
                          padding: '0.875rem 1rem',
                          transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d63384'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 mt-5">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-lg w-100 text-white fw-semibold"
                        style={{
                          backgroundColor: '#d63384',
                          border: 'none',
                          borderRadius: '12px',
                          padding: '1rem 2rem',
                          fontSize: '1.1rem',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 4px 12px rgba(214, 51, 132, 0.2)'
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.target.style.backgroundColor = '#b02a5b';
                            e.target.style.transform = 'translateY(-1px)';
                            e.target.style.boxShadow = '0 6px 16px rgba(214, 51, 132, 0.3)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.target.style.backgroundColor = '#d63384';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 12px rgba(214, 51, 132, 0.2)';
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Creating Course...
                          </>
                        ) : (
                          'Create Course'
                        )}
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;