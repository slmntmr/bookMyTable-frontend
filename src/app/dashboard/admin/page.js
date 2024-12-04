"use client";

export default function AdminDashboard() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Admin Dashboard</h1>
      <ul style={{ listStyleType: "none", padding: 0, maxWidth: "600px", margin: "0 auto" }}>
        <li style={{ margin: "10px 0" }}>
          <a href="/dashboard/admin/create" style={linkStyle}>
            Create Reservation
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="/dashboard/admin/all" style={linkStyle}>
            All Tasks
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="/dashboard/admin/approve" style={linkStyle}>
            Approve Tasks
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="/dashboard/admin/delete" style={linkStyle}>
            Delete Tasks
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="/dashboard/admin/pending" style={linkStyle}>
            Pending Tasks
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="/dashboard/admin/reject" style={linkStyle}>
            Reject Tasks
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="/dashboard/admin/restaurants/create" style={linkStyle}>
            Create Restaurants
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="/dashboard/admin/restaurants/getAllRestaurants" style={linkStyle}>
            View All Restaurants
          </a>
        </li>
      </ul>
    </div>
  );
}

// Stil objesi: Her bir linke uygulanır
const linkStyle = {
  display: "block",
  padding: "10px 15px",
  backgroundColor: "#007bff",
  color: "#fff",
  textDecoration: "none",
  textAlign: "center",
  borderRadius: "5px",
  transition: "background-color 0.3s",
  fontWeight: "bold",
};

linkStyle["&:hover"] = {
  backgroundColor: "#0056b3",
};
