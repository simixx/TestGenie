// src/App.jsx
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-700 via-blue-900 to-purple-800">
      <Navbar />
      <TestForm />
    </div>
  );
};

export default App;


// export default App;
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [context, setContext] = useState('');
//   const [images, setImages] = useState([]);
//   const [testCases, setTestCases] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     Promise.all(files.map(file => {
//       return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result);
//         reader.onerror = reject;
//         reader.readAsDataURL(file);
//       });
//     }))
//     .then(results => {
//       setImages(results);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/generate_test_cases', {
//         context,
//         images
//       });
//       setTestCases(response.data);
//     } catch (error) {
//       console.error('Error generating test cases:', error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Test Case Generator</h1>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <div className="mb-4">
//           <label htmlFor="context" className="block mb-2">Context:</label>
//           <textarea
//             id="context"
//             value={context}
//             onChange={(e) => setContext(e.target.value)}
//             className="w-full p-2 border rounded"
//             rows="4"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="images" className="block mb-2">Upload Screenshots:</label>
//           <input
//             type="file"
//             id="images"
//             onChange={handleImageUpload}
//             multiple
//             accept="image/*"
//             className="block w-full text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-full file:border-0
//               file:text-sm file:font-semibold
//               file:bg-violet-50 file:text-violet-700
//               hover:file:bg-violet-100"
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled={loading}>
//           {loading ? 'Generating...' : 'Generate Test Cases'}
//         </button>
//       </form>
//       {testCases.length > 0 && (
//         <div>
//           <h2 className="text-2xl font-bold mb-2">Generated Test Cases:</h2>
//           {testCases.map((testCase, index) => (
//             <div key={index} className="mb-4 p-4 border rounded">
//               <h3 className="font-bold">{testCase.description}</h3>
//               <p><strong>Pre-conditions:</strong> {testCase.preconditions}</p>
//               <p><strong>Steps:</strong></p>
//               <ol className="list-decimal list-inside">
//                 {testCase.steps.map((step, stepIndex) => (
//                   <li key={stepIndex}>{step}</li>
//                 ))}
//               </ol>
//               <p><strong>Expected Result:</strong> {testCase.expected_result}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;