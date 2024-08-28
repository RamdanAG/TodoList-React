import React,{useState,useEffect} from 'react'

export default function Message() {
    var date = new Date()
    var hours = date.getHours()

    let Message

    if(hours<12){
        Message = "Good Morning"
    }else if(hours <18){
        Message = "Good Afternoon"
    }else{
        Message = "Good Evening"
    }

    var [jam,setJam] = useState(new Date())
    useEffect(() => {
        var timer = setInterval(() => setJam(new Date(),100))

        return function cleanup(){
            clearInterval(timer)
        }
    })

  return (
    <div className='Box'>
        <div className='boxMessageLeft'>
            <h1>{Message}</h1>
            <h2>User</h2>
            <p className='DateP'>Time : {jam.toLocaleTimeString()}</p>
        </div>

        <div className='boxMessageRight'>
            <p>Buat alur kehidupan agar hidup mu tidak berantakan!</p>
        </div>
    </div>
  )
}
