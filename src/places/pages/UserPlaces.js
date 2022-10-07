import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "1",
    title: "Home",
    image:
      "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    description: "Vishnu Home",
    address: "on Earth",
    creator: "Vishnu",
    location: {
      lat: 9.107772,
      long: 79.2809516,
    },
  },
  {
    id: "2",
    title: "Ram-Setu",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201803/ram.jpeg?my9NsRIJSKC1ZbWG4V.FJDLs6zYcXlPp",
    description: "Ram-setu bridge",
    address: "lanka",
    creator: "Ram",
    location: {
      lat: 9.107772,
      lng: 79.2809516,
    },
  },
];

const UserPlaces = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.id === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
