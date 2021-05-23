
import React,{useState} from 'react'
import Sol from './images/sol.png'
import Lua from './images/lua.png'

export default function Liga(){
    const [dia, setDia] = useState(true)
    
    return (
        <div className="container">
            <img width="200px "src={dia?Sol:Lua} />
            <br></br>
            <button className="btn-onoff" onClick={ ()=>setDia(!dia) }>{dia?'Dia On':'Dia Off'}</button>
        </div>
    )
}