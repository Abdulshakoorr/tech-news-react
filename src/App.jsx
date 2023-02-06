
import React from 'react'
import HeroCom from './components/HeroCom'
import Pagination from './components/Pagination'
import Search from './components/Search'
import Stories from './components/Stories'
import './App.css'
import { useGlobalContext } from './Hooks/Context/Context'
const App = () => {
  // const data = useGlobalContext()
  return (
    <div className='lg:px-64 px-8 sm:px-16 py-8 bg-amber-100'>
      <HeroCom/>
      <h1 className='text-center font-bold tracking-wider py-4'>Search About Tech News </h1>
      <Search/>
      <Pagination/>
      <Stories/>
    </div>
  )
}

export default App