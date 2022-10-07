import React, { useContext } from "react";

import Card from "../../shared/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";
import Button from "../../shared/FormElements/Button";
import { AuthContext } from "../../shared/Context/store";

const PlaceList = (props) => {
  const ctx = useContext(AuthContext);
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found !!</h2>
          {ctx.isLoggedIn && <Button to="/places/new">Add New Place.</Button>}
        </Card>
      </div>
    );
  }

  return (
    <Card className="place-list">
      {props.items.map((place, index) => (
        <PlaceItem
          key={index}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </Card>
  );
};

export default PlaceList;
