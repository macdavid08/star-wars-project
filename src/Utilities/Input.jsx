
     import React from 'react'
     
     export const Input = React.forwardRef((props, ref) => {
       return (
         <>
         <div className={` flex flex-col items-center py-2  `}>
            <label htmlFor={props.input.id} className={` uppercase text-lg font-medium`}>{props.label} </label>
            <input id={props.input.id} {...props.input} ref={ref} className={` border-2 border-indigo-500 w-2/3 py-1 px-2 outline-none rounded mt-2 `}  />
         </div>
         
         </>
       )
     })
     