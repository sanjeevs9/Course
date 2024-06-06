

import React, { useState } from 'react';

function CourseSetupForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [video, setVideo] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd process the form data and send it to your backend or database
    console.log('Form submitted:', {
      title,
      description,
      image,
      category,
      price,
      video,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Course Setup</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {/* Course Title */}
        <div>
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        {/* Course Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Course Description
          </label>
          <textarea
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>

        {/* Course Image */}
        <div>
          <label
            htmlFor="image"
            className="block text-gray-700 font-bold mb-2"
          >
            Course Image
          </label>
          <input
            type="file"
            id="image"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* Course Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Course Category
          </label>
          <select
            id="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select a Category</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Sell Your Course */}
        <div>
          <label
            htmlFor="price"
            className="block text-gray-700 font-bold mb-2"
          >
            Sell Your Course
          </label>
          <input
            type="number"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={price}
            onChange={handlePriceChange}
          />
        </div>

        {/* Course Attachment (Video Upload) */}
        <div>
          <label
            htmlFor="video"
            className="block text-gray-700 font-bold mb-2"
          >
            Course Attachment (Video Upload)
          </label>
          <input
            type="file"
            id="video"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept="video/*"
            onChange={handleVideoChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CourseSetupForm;
