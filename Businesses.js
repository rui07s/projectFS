import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BusinessList() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/businesses')
      .then(response => {
        setBusinesses(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {businesses.map(business => (
        <div key={business.id}>
          <h2>{business.name}</h2>
          <p>{business.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BusinessList;