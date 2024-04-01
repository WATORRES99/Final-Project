import React from 'react';

const HouseWithRooms = ({ house }) => {
  return (
    <div className="house">
      <h2>{house.name}</h2>
      <div className="rooms">
        <h3>Rooms</h3>
        <ul>
          {house.rooms.map((room, index) => (
            <li key={index}>
              <strong>{room.name}</strong> - {room.area} sqft
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HouseWithRooms;
