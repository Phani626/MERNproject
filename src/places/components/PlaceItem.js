import React, { useState, useContext } from "react";

import Button from "../../shared/FormElements/Button";
import Modal from "../../shared/UIElements/Modal";
import Map from "../../shared/UIElements/Map";
import "./PlaceItem.css";
import { AuthContext } from "../../shared/Context/store";

const PlaceItem = (props) => {
  const ctx = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteHandler = () => {
    setShowDeleteConfirm(true);
  };

  const hideDeleteHandler = () => {
    setShowDeleteConfirm(false);
  };

  const confirmDeletion = () => {
    setShowDeleteConfirm(false);
    console.log("Deleting...");
  };

  return (
    <>
      <Modal
        onShow={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        onShow={showDeleteConfirm}
        onCancel={hideDeleteHandler}
        header="Are you Sure"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button danger onClick={confirmDeletion}>
              Delete
            </Button>
            <Button inverse onClick={hideDeleteHandler}>
              Cancel
            </Button>
          </>
        }
      >
        <p>Do you really want to delete!!</p>
      </Modal>
  
      <li className="place-item">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse onClick={openMapHandler}>
            VIEW ON MAP
          </Button>
          {ctx.isLoggedIn && (
            <>
              <Button to={`/places/${props.id}`}>EDIT</Button>
              <Button danger onClick={showDeleteHandler}>
                DELETE
              </Button>
            </>
          )}
        </div>
        </li>
    
    </>
  );
};

export default PlaceItem;
