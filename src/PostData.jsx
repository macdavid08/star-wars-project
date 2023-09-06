
 import React, { useState } from 'react'
 import { Input } from './Utilities/Input'
 import { useRef } from 'react'
import { Movies } from './components/Movies'
 
 export const PostData = ({onSaveData}) => {
    const titleInput = useRef()
    const noteInput = useRef()
    const dateInput = useRef()

   

    const submitHandler = (event)=> {
      event.preventDefault();
      
      const dataInput = {
        title: titleInput.current.value,
        note: noteInput.current.value,
        date: dateInput.current.value,
      }
      console.log(dataInput)

        onSaveData(dataInput)
    }

    
   return (
     <>
        <form  className={`py-4 `} onSubmit={submitHandler}>
          <div className={`  py-8 px-3 bg-white rounded shadow-lg spread-2 `}>
            <Input 
            ref={titleInput}
            label="Title"
            input={{
              type: "text",
              id: 'title'

            }}
            />
            
            <Input 
            ref={noteInput}
            label="Release Note"
            input={{
              type: "text",
              id: 'note'
            }}
            />
            <Input 
            ref={dateInput}
            label="Release Date"
            input={{
              type: "date",
              id: 'date'
            }}
            />
           <button type='submit' className={` mt-4 py-3 px-10 bg-indigo-600  rounded-lg uppercase text-base font-bold text-white hover:-translate-y-1 transition transform hover:bg-indigo-700  `}> ADD </button>
          </div>
        </form>   
     </>
   )
 }
 