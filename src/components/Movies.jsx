import React from 'react'


import { MovieList } from './MovieList'
import {Card} from '../Utilities/Card'

export const Movies = ({data, fetch}) => {
  return (
 <Card>
      <div className='bg-gray-100 py-4  '>
  
    <div className={` py-3 px-5`}>
       {data.map((movie)=>{
            return <MovieList title={movie.title} key={movie.id} prep={movie.note} date={movie.date} image={movie.coverImage}/>
        })}
    </div>
    </div>
 </Card>
  )
}
