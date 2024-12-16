import React from "react";
import { deleteReservationAsAdmin } from "@/services/adminService";

const AdminDeleteReservation = ({ reservationId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteReservationAsAdmin(reservationId);
      onDelete(); // Silme sonrası listeyi güncelle
    } catch (error) {
      console.error("Failed to delete reservation:", error);
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete Reservation
    </button>
  );
};

export default AdminDeleteReservation;
