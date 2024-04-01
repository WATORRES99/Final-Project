import React, { useState, useEffect } from 'react';
import HouseWithRooms from './NiceHouseDisplay';

const Display = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      const response = await fetch('https://ancient-taiga-31359.herokuapp.com/api/houses');
      const data = await response.json();
      setHouses(data);
    } catch (error) {
      console.error('Error fetching houses:', error);
    }
  };

  return (
    <div>
      <h1>Houses with Rooms</h1>
      {houses.map((house, index) => (
        <HouseWithRooms key={index} house={house} />
      ))}
    </div>
  );
};

export default Display;
