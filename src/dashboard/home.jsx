import React from 'react'
import  HomeCard  from '../widget/homeCard'
import CardsData from '../data/cards_data'
export default function Home() {
  return (
    <div>
      {CardsData.map(({title , color , footer , icon , value})=>(
        <div className='relative'>
          <HomeCard title={title} color={color} value={value}/>
        </div>
      ))}
    </div>
  )
}
