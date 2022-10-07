import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: 2,
      name: "Ram",
      places: 9,
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBt_YkWeJ35dIktluBgAHa83cVHS_SaYWSOvThEsWCWkLS0j8MHTA38xJF1uJRZKc0Vg&usqp=CAU",
    },
    {
      id: 3,
      name: "Krishna",
      places: 10,
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBt_YkWeJ35dIktluBgAHa83cVHS_SaYWSOvThEsWCWkLS0j8MHTA38xJF1uJRZKc0Vg&usqp=CAU",
    },
    {
      id: 1,
      name: "Vishnu",
      places: 12,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBt_YkWeJ35dIktluBgAHa83cVHS_SaYWSOvThEsWCWkLS0j8MHTA38xJF1uJRZKc0Vg&usqp=CAU",
    },
    
  ];

  return (
    <div>
      <UserList items={USERS} />
    </div>
  );
};

export default Users;
