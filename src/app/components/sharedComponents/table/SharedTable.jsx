"use client"
import {useState} from 'react';

export default function SharedTable({caption, count, columns, data, pageSize=5, scrollSize=6}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentScroll,setCurrentScroll] = useState(1);

  const totalPages = Math.ceil(data.length /pageSize);
  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className={`bg-white rounded-2xl ${isExpanded ? "w-[57.8125rem] h-[49.625rem]" : "w-[27.5rem] h-[16.25rem]"} box-border overflow-hidden ` }>
      <div className="box-border h-[10.12rem] pl-[1.31rem] pt-[1.69rem]" >
        <p className="text-primary">{caption}</p>
        <p className="text-number">{count}</p>
        <button onClick={() => setIsExpanded(!isExpanded)} className={`box-border w-[5.5625rem] h-[2.25rem] mt-[1.75rem]  ${!isExpanded ? "ml-[19.94rem]" :"ml-[49.29rem]"} button-text bg-[#1B1B1B] rounded-[3.125rem] flex gap-[0.375rem] items-center`}>
          <p className="w-[3.125rem]">{isExpanded? "Collapse" : "Expand"}</p>
          {!isExpanded && (<img src="/icons/zoom.svg" alt="Expand icon" className="w-6 h-6"/>)}
          {isExpanded && (<img src="/icons/collpase.svg" alt="Collpase icon" className="w-6 h-6"/>)}
        </button>
      </div>
      <table className={`table-auto ${!isExpanded ? " ml-[-1rem] [&_td]:border [&_td]:border-[#DBDBDB] [&_th]:border [&_th]:border-[#DBDBDB]" : "mx-6"}  min-w-[37rem] border-collapse `}>
        {isExpanded && (
          <thead>
            <tr className="text-left table-head bg-[#F8F9FA] border-b border-[#EFF2F7] ">
              {columns.map((col) => (
                <th key={col} className="px-8 align-middle">{isExpanded ? (
                  <p className="inline-flex items-center h-[2.9375rem]">
                    {col}
                    <img src="/icons/compass.svg" alt="compass icon" className="w-6 h-6 ml-2 align-middle"/>
                  </p>
                 ): (col)}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className={`${isExpanded ? "table-extend-text h-[3.125rem]" : "table-text"}`}>
          {paginatedData.map((row, idx) => (
            <tr key={idx} className="h-8 even:bg-[#FAFAFA] odd:bg-white">
              {columns.map((col) => (
                <td key={col} className="px-8" >
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className=" mt-[1.75rem] table-number relative ">
        {currentScroll > 1 && (<button onClick={() => {
          const newScroll = currentScroll - scrollSize;
          setCurrentScroll(newScroll);
          }} className="absolute left-[45rem]">&lt;</button>)}
        <div className="absolute left-[47rem] items-center">{Array.from({length: scrollSize}, (_, i) => {
          const pageNum = i + currentScroll;
          return pageNum <= totalPages && (
            <button key={pageNum} onClick={() => setCurrentPage(pageNum)}
            className={`px-1 hover:text-purple-600 focus:text-purple-600 focus:outline-none ${currentPage === pageNum ? "underline text-purple-700" : null}`}>{pageNum}</button>
          )}
        )}
        {currentScroll + scrollSize <= totalPages && (
          <span>...</span>
        )}
        </div>
        {currentScroll + scrollSize <= totalPages && (

          <button onClick={() => {
            const newScroll = currentScroll + scrollSize;
            setCurrentScroll(newScroll);
            }} className="absolute right-[1.5rem]">&gt;</button>
        )}
      </div>
    </div>
  )
}