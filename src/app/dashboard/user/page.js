export default function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <ul>
        <li><a href="/dashboard/admin/create">Create Reservation</a></li>
        <li><a href="/dashboard/user/my-reservations">My Reservations</a></li>
        <li><a href="/dashboard/user/view">View Reservations</a></li>
      </ul>
    </div>
  );
}
