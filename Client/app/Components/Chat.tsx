"use client"
import React, { useEffect, useState } from 'react'
import gifBot from "../../assets/Seniverse-robot.gif"

type Messages = {
  msg: string,
  owner: string
}
export default function Chat() {
  const [historial, setHistorial] = useState<Messages[]>([])
  const [message, setMessage] = useState<Messages>({
    msg: "",
    owner: ""
  })
  useEffect (() => {
    const chatContainer = document.getElementById("chatContainer")
    chatContainer?.scrollTo({
      top: chatContainer.scrollHeight,
      behavior: "smooth"
    })
  }, [historial])
  const handleChange = (e:any) => {
    if(e.key === "Enter") {
      message.owner = "Person"
      setHistorial([...historial, message])
      setMessage({
        msg: "",
        owner: ""
      })
    }
    if(e.key === "Shift") {
      message.owner = "Bot"
      setHistorial([...historial, message])
      setMessage({
        msg: "",
        owner: ""
      })
    }
  }
  return (
    <div className='absolute rounded-t-lg bottom-10 right-10 bg-black border-4 border-white h-[30vh] w-[20vw]'>
        <div className='bg-slate-400 h-[15%]'>
          <img src={`${gifBot ? gifBot : null}`} alt='chatbot' />
            Barra de arriba
        </div>
        <div id='chatContainer' className='bg-slate-50 h-[75%] from-gray-700 pt-4 overflow-y-auto'>
          {historial.map((mes, index) => <div className={`w-[50%] pl-2 relative rounded-md mb-6 ${mes.owner === "Person" ? "bg-green-500 left-[50%]" : "bg-red-500"}`} key={index}>{mes.msg}</div>)}
        </div>
        <input type="text" placeholder='En que puedo ayudarle?' name='messageInput' className='h-[10%] border-2 border-red-300 w-full pl-2' value={message.msg} onKeyDown={handleChange} onChange={(e) => setMessage({ msg: e.target.value, owner: ""})}/>
    </div>
  )
}
