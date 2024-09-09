// src/components/TestForm.jsx
import { useState } from 'react';

const TestForm = () => {
  const [context, setContext] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ context, images });
    // Backend logic will go here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-30 shadow-lg backdrop-blur-lg p-8 rounded-lg max-w-lg mx-auto mt-10 animate-bounceIn"
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-white">
        Describe Testing Instructions
      </h2>

      <div className="mb-6">
        <label htmlFor="context" className="block text-lg font-medium text-white">
          Optional Context:
        </label>
        <textarea
          id="context"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          className="mt-2 w-full p-3 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows="4"
          placeholder="Enter context for the testing instructions..."
        />
      </div>

      <div className="mb-6">
        <label htmlFor="images" className="block text-lg font-medium text-white">
          Upload Screenshots:
        </label>
        <input
          id="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="mt-2 w-full p-3 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {images.length > 0 && (
          <div className="mt-3 text-white">
            <p>{images.length} images selected</p>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 px-4 rounded-md shadow-md hover:from-pink-600 hover:to-blue-600 transition duration-300 transform hover:scale-105"
      >
        Describe Testing Instructions
      </button>
    </form>
  );
};

export default TestForm;

// import { useState } from 'react';
// import axios from 'axios';

// const TestForm = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [caption, setCaption] = useState('');
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedFile) {
//       setError('Please select an image file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/caption', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setCaption(response.data.caption);
//       setError('');
//     } catch (err) {
//       console.error('Error:', err);
//       setError('An error occurred while processing the image.');
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Upload Image for Caption</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
//             Choose an image:
//           </label>
//           <input
//             type="file"
//             id="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="border rounded p-2 w-full"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </form>
//       {caption && (
//         <div className="mt-4 p-4 bg-gray-100 rounded border">
//           <h3 className="text-xl font-semibold">Generated Caption:</h3>
//           <p>{caption}</p>
//         </div>
//       )}
//       {error && (
//         <div className="mt-4 p-4 bg-red-100 text-red-800 rounded border">
//           <p>{error}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TestForm;

