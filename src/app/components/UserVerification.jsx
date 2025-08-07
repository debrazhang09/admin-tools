import {columns, data} from '../dammydata';
import SharedTable from '../components/sharedTable';

export default function userVerification() {
  //pending and completed fake data, the real data should fetch from database
  const pending = 25;
  const completed = 578;
  return (
    <>
      <p className="heading-secondary mt-[3.81rem] mb-[1.12rem] h-[2.25rem]">User Verification</p>
      <div className="flex gap-[3.06rem]">
        <SharedTable caption="Requests Pending" count={pending} columns={columns} data={data} />
        <SharedTable caption="Requests Completed" count={pending} columns={columns} data={data} />
      </div>
    </>
  )
}