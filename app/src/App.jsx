import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card';
import { dataContext } from './context/DataContext';
export const BASE_URL= "http://localhost:9000";
const App = () => {
 const {filteredData } =useContext(dataContext)
  return (
    <div className='main' >
      <Navbar />
   <div className='pt-45 md:pt-38 pb-3 grid lg:grid-cols-3 md:grid-cols-2 gap-y-6 scrollbar-none md:my-0 mx-auto md:gap-x-5 w-[70vw] items-center md:h-[70vh]'>
      {
      filteredData.map(item=>{
      return <div key={item.name}><Card name={item.name} text={item.text} img={item.image} price={item.price} /></div>
      })
      }
    </div>
    </div>
  )
}

export default App
