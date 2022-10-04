import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    console.log(props.items.length);
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found !!</h2>
          <Link to="./">Add New Place.</Link>
        </Card>
      </div>
    );
  }

  console.log(props.items.length);

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
