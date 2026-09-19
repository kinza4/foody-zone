import { dataContext } from '../context/DataContext'
import { useContext, useState, useEffect } from 'react'
const NavbarComp = () => {
  const [all, setAll] = useState(true)
  const {data, setFilteredData} = useContext(dataContext)
  const HandleTypes = (type) => {
    if (type === "all") {
      setAll(true)
      setFilteredData(data)
    }
    else {
      setAll(false)
      const array = data.filter(item=>{
        return item.type===type
      })
      setFilteredData(array)
    }
  }
  return (
    <div >
      <ul className=' flex  justify-center gap-x-5'>
        <li onClick={() => { HandleTypes("all") }} className={`text-white px-3 test-xs md:text-sm pb-1 cursor-pointer ${all ? "bg-red-800" : "bg-red-500"}  rounded`}>All</li>
        <li onClick={() => { HandleTypes("breakfast")}} className='bg-red-500 text-white px-3 test-xs  md:text-sm pb-1 cursor-pointer hover:bg-red-800 rounded '>Breakfast</li>
        <li onClick={() => { HandleTypes("lunch") }} className='bg-red-500 text-white px-3 test-xs  md:text-sm pb-1 cursor-pointer hover:bg-red-800 rounded'>Lunch</li>
        <li onClick={() => { HandleTypes("dinner") }} className='bg-red-500 text-white px-3 test-xs  md:text-sm pb-1 cursor-pointer hover:bg-red-800 rounded'>Dinner</li>
      </ul>
    </div>
  )
}

export default NavbarComp
