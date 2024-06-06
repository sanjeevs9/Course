import React from 'react';
import './CourseCard.css';

function CourseCard({ title, category, chapters, progress, price, image, isComplete }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-card-image" />
      <div className="course-card-content">
        <h3>{title}</h3>
        <p className="course-card-category">{category}</p>
        <div className="course-card-progress">
          <div className="course-card-progress-bar" style={{ width: `${progress}%` }}></div>
          <p>{chapters} Chapters {isComplete ? '100% Complete' : `${progress}% Complete`}</p>
        </div>
        {price && <p className="course-card-price">${price}</p>}
      </div>
    </div>
  );
}

export default CourseCard;
