import React, { useEffect, useState } from "react";
import { getAllReservations } from "@/services/adminService";
import { getUserReservations } from "@/services/userService";

const ReservationsList = ({ role }) => {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    try {
      const data =
        role === "ADMIN"
          ? await getAllReservations()
          : await getUserReservations();
      setReservations(data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div>
      <h2>{role === "ADMIN" ? "All Reservations" : "My Reservations"}</h2>
      <ul>
        {reservations.map((res) => (
          <li key={res.id}>
            {res.details}
            {role === "ADMIN" ? (
              <AdminDeleteReservation
                reservationId={res.id}
                onDelete={fetchReservations}
              />
            ) : (
              <UserDeleteReservation
                reservationId={res.id}
                onDelete={fetchReservations}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationsList;
