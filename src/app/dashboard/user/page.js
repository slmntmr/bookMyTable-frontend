"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../../styles/auth/userDashboard.module.css"; // CSS modülü import edildi

export default function UserDashboard() {
  return (
    <div className={`container mt-5 ${styles.container}`}>
      <div className="text-center mb-4">
        <h1 className={styles.header}>User Dashboard</h1>
      </div>
      <div className="d-grid gap-3">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => (window.location.href = "/dashboard/admin/create")}
        >
          Create Reservation
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => (window.location.href = "/dashboard/user/my-reservations")}
        >
          My Reservations
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => (window.location.href = "/dashboard/user/view")}
        >
          View Reservations
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => (window.location.href = "/dashboard/user/all")}
        >
          View All Reservations
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => (window.location.href = "/dashboard/user/restaurants/getAllRestaurants")}
        >
          View All Restaurants
        </button>
        <button
          className="btn btn-danger btn-lg"
          onClick={() => (window.location.href = "/dashboard/admin/restaurants/delete")}
        >
          Delete Restaurants
        </button>
      </div>
    </div>
  );
}
