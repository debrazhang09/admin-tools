import AdminHeader from '../components/AdminHeader';
import Overview from '../components/Overview';
import UserVerification from "../components/UserVerification";
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