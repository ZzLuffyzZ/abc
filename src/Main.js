import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";


export default function Main() {
    let history = useHistory();
    const [name,setName] = useState('')
    const [age,setAge] = useState(0)
    //const [check,setCheck] = useState(false)
    const [listUser, setlistUser] = useState([])

    useEffect(() => {
        console.log('Hello');
    }, [])

    const submit = () => {
        let obj = {
            name,
            age,
            //check,
        }
        setName('')
        setAge(0)
        let newList = listUser
        newList.push(obj)
        setlistUser([...newList])
    }

    const goAbout = () =>{
        history.push('/about')
    }


    const change = (index) => {
        let newList = listUser
        let r = Math.floor(Math.random() * Math.floor(255));
        let g = Math.floor(Math.random() * Math.floor(255));
        let b = Math.floor(Math.random() * Math.floor(255));
        newList[index].r = r
        newList[index].g = g
        newList[index].b = b
        console.log(newList[index])
        setlistUser([...newList])
    }

    const update = (i) => {
        let newList = listUser
        //for(i=0;i<newList.length;i++){
            //if(!newList[i].check){
                newList[i].name = name
                newList[i].age =age
                console.log(newList[i].check)
            //}else{return}
        //}
        setlistUser([...newList])
    }

    /*const changeCheck = (event, index)=>{
        setCheck(event[index].target.checked)
    }*/

    const remove = (index) => {
        let newList = listUser
        newList.splice(index, 1)
        setlistUser([...newList])
    }
    const changeName = (event) => {
        setName(event.target.value)
    }
    const addAge = () => setAge(age + 1)
    const miusAge = () => setAge(age - 1)


    const renderItem = (item,index) => {
        return <li key ={index}
        style={{ color:`rgb(${item.r},${item.g},${item.b})` }}
        >Phần thứ {index + 1}, có tên: {item.name}, tuổi: {item.age}<button onClick={() => remove(index)}>Remove</button><button onClick={() => change(index)}>Change</button>
        <button onClick={()=>{update(index)}}>Update</button>
        </li>
    }
    return (
        <div>
            Hello {name},
            Age {age}
            <br/>
            <input type='text' value={name} onChange={changeName}></input>
            <button onClick={addAge}>Add</button>
            <button onClick={miusAge}>Minus</button>
            <button onClick={goAbout}>About</button>
            <button onClick={submit}>Submit</button>
            <ul>
                {listUser.map(renderItem)}
            </ul>
        </div>
    )
}