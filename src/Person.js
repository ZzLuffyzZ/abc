import React, { useState } from 'react'

export default function Person(props) {
    let item = props.item
    let index = props.index
    const [color, setColor] = useState('black')
    const [check, setCheck] = useState(false)
    const change = ()=>{
        let r = Math.floor(Math.random() * Math.floor(255));
        let g = Math.floor(Math.random() * Math.floor(255));
        let b = Math.floor(Math.random() * Math.floor(255));
        setColor(`rgb(${r}, ${g}, ${b})`)
    }
    return (
            <li key={index}
            style={{ color: color }}
        >   <input checked={check} type='checkbox' onChange={()=>{
            props.handleCheckBox(index)
            setCheck(!check)}}></input>
            Người thứ {index + 1}, có tên: {item.name}, tuổi {item.age}
            <button onClick={() => props.remove(index)}>Remove</button>
            <button onClick={() =>change(index)}>Change</button>
            <button onClick={()=>props.edit(index)}>Edit</button></li>
    )
}
