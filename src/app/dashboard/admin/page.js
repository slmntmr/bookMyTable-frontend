"use client";

export default function AdminDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <a href="/dashboard/admin/create">Create Reservation</a>
        </li>
        <li>
          <a href="/dashboard/admin/all">All Tasks</a>
        </li>
        <li>
          <a href="/dashboard/admin/approve">Approve Tasks</a>
        </li>
        <li>
          <a href="/dashboard/admin/delete">Delete Tasks</a>
        </li>
        <li>
          <a href="/dashboard/admin/pending">Pending Tasks</a>
        </li>
        <li>
          <a href="/dashboard/admin/reject">Reject Tasks</a>
        </li>
        <li>
          <a href="/dashboard/admin/restaurants/create">Create Restaurants</a>
        </li>
        <li>
          <a href="/dashboard/admin/restaurants/view/1">View Restaurants</a>
        </li>
      </ul>
    </div>
  );
}
