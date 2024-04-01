// HousesList.js

import React from "react";
import { House } from './House';
import { housesApi } from './HousesAPI.js';
import { NewHouseForm } from "./NewHouseForm.js";

export class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    addNewHouse = async (newHouse) => {
        await housesApi.post(newHouse);
        this.fetchHouses();
    };

    deleteHouse = async (houseId) => {
        await housesApi.delete(houseId);
        this.fetchHouses();
    };

    render() {
        return (
            <div className="house-list">
                <NewHouseForm addNewHouse={this.addNewHouse} />
                {this.state.houses.map((house) => (
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                        deleteHouse={this.deleteHouse}
                    />
                ))}
            </div>
        );
    }
}
