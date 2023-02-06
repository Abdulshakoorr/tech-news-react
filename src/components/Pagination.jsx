import React from 'react'
import { useGlobalContext } from '../Hooks/Context/Context'

const Pagination = () => {
  const {page, nbPages, getNextPage, getPrePage} = useGlobalContext()
  return (
    <div className='p-4 flex items-center justify-center gap-4'>
      <button onClick={() => getPrePage()} className="p-2 px-4 bg-red-200 font-serif shadow-md">PRE</button>
      <p>{page + 1} of {nbPages}</p>
      <button onClick={() => getNextPage()} className="p-2 px-4 bg-red-200 font-serif shadow-md">NEXT</button>
    </div>
  )
}

export default Pagination