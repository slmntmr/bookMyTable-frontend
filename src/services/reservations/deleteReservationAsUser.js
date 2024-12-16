import axios from "axios";

export const deleteReservationAsUser = async (id) => {
  const token = localStorage.getItem("token");

  const response = await axios.delete(
    `http://localhost:8080/api/reservations/user/delete/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const getUserReservations = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `http://localhost:8080/api/reservations/my-reservations`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
