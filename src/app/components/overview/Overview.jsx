import {overviewData} from '../../dammydata';
export default function Overview() {
  // width: 7.89231rem height: 1.8125rem; flex-shrink: 0;
  const overviewMap = Object.entries(overviewData).map(([label, value]) => (
    <div key={label} className="flex flex-col w-[9.5rem] h-[7rem] bg-white rounded-2xl">
      <p className="text-primary ml-[0.85rem] mt-[1.69rem]">{label}</p>
      <p className="text-number ml-[0.85rem] mb-[1.69rem]">{value.toLocaleString()}</p>

    </div>
  ))
  return (
    <>
      <p className="heading-primary w-[14.75rem] box-border p-[0.63rem] border-[0.125rem] border-transparent mt-[3.56rem] mb-[3.19rem]">Overview</p>
      <div aria-label="overview-info" className="inline-flex items-center gap-[2.75rem]  mr-[5.5rem]">
        {overviewMap}
      </div>
    </>
  )
}