import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link href="/dashboard/admin/create">Create Reservation</Link></li>
        <li><Link href="/dashboard/admin/all">All Tasks</Link></li>
        <li><Link href="/dashboard/admin/approve">Approve Tasks</Link></li>
        <li><Link href="/dashboard/admin/delete">Delete Tasks</Link></li>
        <li><Link href="/dashboard/admin/pending">Pending Tasks</Link></li>
        <li><Link href="/dashboard/admin/reject">Reject Tasks</Link></li>
        <li><Link href="/dashboard/admin/restaurants/create">Create Restaurants</Link></li>
        <li><Link href="/dashboard/admin/restaurants/view">View Restaurants</Link></li>
      </ul>
    </div>
  );
}
