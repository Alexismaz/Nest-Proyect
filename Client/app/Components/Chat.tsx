import React from 'react'

export default function Chat() {
  return (
    <div className='absolute rounded-t-lg bottom-10 right-10 bg-black border-4 border-white h-[30vh] w-[20vw]'>
        <div className='bg-slate-400 h-[15%]'>
            Barra de arriba
        </div>
        <div className='bg-slate-50 h-[75%] from-gray-700'>
        </div>
        <input type="text" placeholder='Hagame una pregunta' title='' className='h-[10%] border-2 border-red-300 w-full'/>
    </div>
  )
}
