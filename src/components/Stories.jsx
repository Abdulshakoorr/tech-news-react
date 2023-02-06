import React, {  useState } from 'react'
import { useGlobalContext } from '../Hooks/Context/Context'
const Stories = () => {
   const {hits,isLoading,removePost} = useGlobalContext()
if(isLoading){
    return (
        <>loading please wait!</>
    )
}

  return (
    <div>
        <h2 className='text-center font-serif font-semibold tracking-wider'>Post Related To Technologies</h2>
        {
            hits.map((item)=>{
                return(
                    <div key={item.created_at_i } className="card p-4 shadow-md m-2">
                        <h2 className='font-serif'>{item.title}</h2>
                        <p>Author: {item.author}</p>
                        <p>comments: {item.num_comments}</p>
                        <p>points: {item.points}</p>
                        <div className="inlinecard flex items-center justify-between px-2 p-2" >
                            <a className='border px-2' href={item.url} target="_blank"> Read more</a>
                            <button onClick={() => removePost(item.objectID)} className='text-red-400 px-2 hover:shadow-md hover:shadow-blue-400 hover:p-2 transition-all duration-200 ease-linear '>Remove</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Stories