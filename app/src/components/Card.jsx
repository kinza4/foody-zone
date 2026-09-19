import React from 'react'
import { BASE_URL } from '../App'
const Card = (props) => {
    return (
        <div className='card lg:h-[28vh] h-[18vh] w-[73vw] lg:w-[22vw] flex flex-col px-3 py-2 rounded-2xl border text-white border-b-[#EABFFF] border-r-[#EABFFF] border-t-[#98F9FF] border-l-[#EABFFF]'>
            <div className=' flex gap-x-2 '>
             <img src={BASE_URL + props.img} className='w-24 h-24 md:w-28 md:h-28' alt="img" />
                <div>
                    <h1 className='font-bold text-sm md:text-md'>{props.name}</h1>
                    <div className='text-xs'>{props.text}</div>
                </div>
            </div>
            <div className='xl:translate-x-70 translate-x-45 bg-red-500 w-13 text-center rounded-lg px-2 py-1 text-xs'> Rs.{props.price}</div>
        </div>

    )
}

export default Card
