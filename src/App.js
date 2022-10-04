import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NewPlaces from "./places/pages/NewPlaces";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Users from "./users/pages/Users";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlaces />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          {/* <Route path="*" element={<p>No Page found</p>} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
