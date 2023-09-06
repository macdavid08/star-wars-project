import React from 'react'

export const MovieList = ({title, prep, date, coverImage }) => {
  return (
        <ul className={` bg-white mb-3 py-3 px-4 rounded-lg shadow-lg ` }>
            <li className={` uppercase text-base font-medium`}>{title}</li>
            <li className={` text-sm `}>{prep}</li>
            <li className={` text-sm `}>{date}</li>
        </ul>
  )
}
