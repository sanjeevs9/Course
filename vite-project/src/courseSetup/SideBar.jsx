import React from 'react';
import '../components/Sidebar.css';

function SideBar() {
  return (
    <div className="sidebar h-full">
      <h1>E-Learning</h1>
      <nav >
        <a className='cursor-pointer'>Courses</a>
      </nav>
    </div>
  );
}

export default SideBar;
