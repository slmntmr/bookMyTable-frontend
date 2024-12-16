import React from "react";
import { deleteReservationAsUser } from "@/services/userService";

const UserDeleteReservation = ({ reservationId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteReservationAsUser(reservationId);
      onDelete(); // Silme sonrası listeyi güncelle
    } catch (error) {
      console.error("Failed to delete reservation:", error);
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete My Reservation
    </button>
  );
};

export default UserDeleteReservation;
