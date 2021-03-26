import React, { useEffect, useState } from 'react'
import { getPokemon } from "./axios"
export default function Pokemon() {
    const [name, setName] = useState('')
    const [data, setData] = useState(null)
    const changeName = (event) => {
        setName(event.target.value)
    }
    const[loading,setLoading] = useState(false)
    const fetchPokemon = () => {
        if (name) {
            setLoading(true)
            getPokemon(name).then(res => {
                setData(res.data)
                setLoading(false)
                console.log(res.data);
            }).catch(err => {
                setLoading(false)
                setData(null)
            })
        } else { alert("Nhập tên") }
    }
    return (
        <div>
            <input type='text' value={name} onChange={changeName}
            ></input>
            <button onClick={() => fetchPokemon()}>Search</button>
            {loading?<p>Loading</p>: data ? (<div>

                <p> Thông tin: {data.name}</p>
                <p>Cân nặng:{data.weight}kg</p>
                <img src={data?.sprites?.other["official-artwork"]?.front_default}></img>
            </div>) : <p>Không có con nào tên {name} cả</p>}
        </div>
    )
}
