import { useContext,useState } from 'react'
import NavbarComp from './NavbarComp'
import { dataContext } from '../context/DataContext'

const Navbar = () => {
  const [search, setSearch] = useState("")
  const {data,setFilteredData} = useContext(dataContext)
  const HandleChange=(e)=>{
    const search = e.target.value
    setSearch(search)
    const array = data.filter(item=>{
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
    console.log(array)
    setFilteredData(array)
  }
  return (
<div className='bg-gray-800 w-full pb-4 fixed top-0 z-40'>
      <div className='bg-gray-800 w-full h-[15vh] flex flex-col md:flex-row justify-between items-center md:px-8 py-10'>
      <img className='md:m-0 mb-2' src="public/Foody.svg" alt="logo" width={170} />
      <input onChange={(e)=>{HandleChange(e)}} value={search} type="text" placeholder='Search Food' className='text-white h-[5vh] lg:w-[15vw] mt-2 md:mt-0 placeholder:text-white placeholder:-translate-y-1 placeholder:text-[10px] px-1 outline outline-[#FF0909]' />
    </div>
    <NavbarComp />
</div>
  )
}
export default Navbar
