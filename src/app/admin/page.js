import AdminHeader from '../components/adminheader/AdminHeader';
import Overview from '../components/overview/Overview';
import UserVerification from "../components/userverification/UserVerification";
export default function AdminPage() {
  return (
    <div >
      <AdminHeader imageUrl="/dan_photo.jpg" name="Dan Zhang"/>
      <main className="ml-[4.81rem]">
        <Overview />
        <UserVerification />

      </main>

    </div>

  )


}