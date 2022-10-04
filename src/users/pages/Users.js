import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: 2,
      name: "Ram",
      places: 9,
      image: "https://www.pexels.com/photo/green-and-blue-peacock-feather-674010/",
    },
    {
      id: 3,
      name: "Krishna",
      places: 10,
      image: "https://www.pexels.com/photo/green-and-blue-peacock-feather-674010/",
    },
    {
      id: 1,
      name: "Vishnu",
      places: 12,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBt_YkWeJ35dIktluBgAHa83cVHS_SaYWSOvThEsWCWkLS0j8MHTA38xJF1uJRZKc0Vg&usqp=CAU",
    },
  ];

  return (
    <div>
      <h1>Users Page !</h1>
      <UserList items={USERS} />
    </div>
  );
};

export default Users;
