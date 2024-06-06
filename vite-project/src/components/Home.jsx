import React from 'react';
import Sidebar from './Sidebar';
import CourseCard from './CourseCard';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();
  const courses = [
    {
      title: 'Cinematic Techniques',
      category: 'Filming',
      chapters: 4,
      progress: 0.5,
      price: 96,
      image: 'https://images.unsplash.com/photo-1512937881230-d51c3fc65b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      isComplete: true
    },
    {
      title: 'Introduction to Filming',
      category: 'Filming',
      chapters: 2,
      progress: 0.5,
      price: 96,
      image: 'https://images.unsplash.com/photo-1507461278961-3437e7963a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      isComplete: false
    },
    {
      title: 'Structural Design Principles',
      category: 'Engineering',
      chapters: 10,
      progress: 0.5,
      price: 96,
      image: 'https://images.unsplash.com/photo-1509721148071-b7779833180e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      isComplete: false
    },
    {
      title: 'Engineering Basics',
      category: 'Engineering',
      chapters: 6,
      progress: 0.5,
      price: 96,
      image: 'https://images.unsplash.com/photo-1515637067750-698d194df5e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      isComplete: false
    },
    {
      title: 'Tax Accounting Basics',
      category: 'Accounting',
      chapters: 10,
      progress: 0.5,
      price: 96,
      image: 'https://images.unsplash.com/photo-1517400968750-5e32979c14c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      isComplete: false
    },
    {
      title: 'Financial Reporting',
      category: 'Accounting',
      chapters: 6,
      progress: 0.5,
      price: 92,
      image: 'https://images.unsplash.com/photo-1555949963-f905c8bdd521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      isComplete: false
    },
    {
      title: 'Nature Photography Basics',
      category: 'Photography',
      chapters: 8,
      progress: 0.5,
      price: 53,
      image: 'https://images.unsplash.com/photo-1520342868574-5fa3804e468b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      isComplete: false
    },
    {
      title: 'Capturing the Moment',
      category: 'Photography',
      chapters: 8,
      progress: 0.5,
      price: 96,
      image: 'https://images.unsplash.com/photo-1511230889550-101498173a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      isComplete: false
    },
  ];

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <div className="header">
          <input type="text" placeholder="Search for a course" />
          <button onClick={()=>{navigate("/course")}}>Teacher mode</button>
        </div>
        <hr></hr>
        <div className="catalog">
          <a href="#">Filming</a>
          <a href="#">Engineering</a>
          <a href="#">Accounting</a>
          <a href="#">Photography</a>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
