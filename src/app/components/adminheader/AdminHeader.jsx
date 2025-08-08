export default function AdminHeader({name, imageUrl}) {
  return (
    <header className="flex h-[4.625rem] flex-shrink-0 bg-[#C4E6FF82]">
      <div aria-label={name} style={{backgroundImage: `url(${imageUrl})`}}
        className="box-border w-[2.3125rem] h-[2.4375rem] mt-[1.19rem] mb-4 ml-[52.12rem] rounded-md flex-shrink-0 bg-[#808080]  bg-cover bg-center bg-no-repeat  ">
      </div>
      <div className="h-12 w-[10.5rem] mt-[0.94rem] mr-[3.12rem] ml-[0.87rem]">
        <h1 className="text-[1.25rem] font-semibold leading-[1.75rem] text-black/70">{name}</h1>
        <p className="text-[0.9375rem] font-extralight leading-[1.75rem] text-black">Owner</p>
      </div>
    </header>
  )

}