import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchBusinesses } from './services/api';

function App() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchBusinesses();
      setBusinesses(data);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <h1>Business Listings</h1>
      <ul>
        {businesses.map((business) => (
          <li key={business.id}>{business.Name}</li> // Adjust according to your data structure
        ))}
      </ul>
    </div>
  );
}

export default App;
