import AdminHeader from '../components/AdminHeader';
import Overview from '../components/Overview'
export default function AdminPage() {
  return (
    <div >
      <AdminHeader imageUrl="/dan_photo.jpg" name="Dan Zhang"/>
      <main>
        <Overview />

      </main>

    </div>

  )


}