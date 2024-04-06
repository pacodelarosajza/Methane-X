// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://ejemplo.com/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Frontend App</h1>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
