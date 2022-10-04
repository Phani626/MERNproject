import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";
import Card from "../../shared/UIElements/Card";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h1>No Users Found!</h1>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user, index) => (
        <UserItem
          key={index}
          id={user.id}
          image={user.image}
          name={user.name}
          placesCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UserList;
