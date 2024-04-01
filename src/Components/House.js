import React from "react";
import { NewRoomForm } from './NewRoomForm';

export const House = ({ house, updateHouse, deleteHouse }) => {
    const handleDelete = () => {
        deleteHouse(house._id);
    };

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room] });

    return (
        <div className="house">
            <h3>{house.name}</h3>
            <button onClick={handleDelete}>Delete House</button>
            
            <div>
                <h4>Rooms</h4>
                <ul>
                    {house.rooms.map((room, index) => (
                        <li key={index}>
                            <label>{`${room.name} Area: ${room.area}`}</label>
                            <button onClick={(e) => deleteRoom(room._id)}>Delete Room</button>
                        </li>
                    ))}
                </ul>
                <NewRoomForm addNewRoom={addNewRoom} />
            </div>
        </div>
    );
};
