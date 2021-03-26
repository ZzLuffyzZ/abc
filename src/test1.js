import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Person from './Person'

export default function Test1() {
    let history = useHistory();
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [listUser, setListUser] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [indexEdit, setIndexEdit] = useState(null)
    const [listCheck, setListCheck] = useState([])
    //const [checkbox, setCheckbox] = useState(false)

    const handleCheckBox = (index )=>{
        if(listCheck.indexOf(index)==-1){
            setListCheck([...listCheck,index])
        }else{
            setListCheck([...listCheck.filter(item=>item != index)])
        }
    }

    const deleteAll = ()=>{
        setListUser([...listUser.filter((item, index)=> !listCheck.includes(index))])
    }
    const submit = () => {
        let obj = {
            name,
            age
        }
        setName('')
        setAge(0)
        let newList = listUser
        newList.push(obj)
        setListUser([...newList])
    }

    const edit = (index)=>{
        setName(listUser[index].name)
        setAge(listUser[index].age)
        setIsEdit(true)
        setIndexEdit(index)
    }

    const save =()=>{
        let newArray = listUser
        newArray[indexEdit].age = age
        newArray[indexEdit].name = name
        setListUser([...newArray])
        setName(``)
        setAge(0)
        setIndexEdit(null)
    }


    const changeName = (event) => setName(event.target.value)
    const addAge = () => setAge(age + 1)
    const minusAge = () => setAge(age - 1)

    const remove = (index) => {
        let newList = listUser
        newList.splice(index, 1)
        setListUser([...newList])
    }

    //const changeCheck = (event)=> {setCheckbox(event.target.checked)}

    

    

    const renderItem = (item, index) => {
        return <Person 
            item = {item}
            index ={index}
            remove = {remove}
            handleCheckBox = {handleCheckBox}
            edit = {edit}
            ></Person>

    }
    return (
        <div>
            Hello {name},
            Age {age}
            <br />
            <input type='text' value={name} onChange={changeName} />
            <button onClick={addAge} >Add</button>
            <button onClick={minusAge}>Minus</button>
            <button onClick={isEdit ? save:submit} >{isEdit ?'Edit':'Submit'}</button>
            <button onClick={deleteAll}>DeleteAll</button>
            <ul>
                {listUser.map(renderItem)}
            </ul>
        </div>
    )
}
// THêm 1 nút edit vào từng thẻ li
// khi bấm edit thì hiện tên tuổi lên trên ô nhập
// nút submit thành nút edit, xuất hiện thêm nút cancel
// bấm cancel thì nút edit lại trở thành nút submit, nút cancel mất đi
//bấm edit thì edit data, giữ nguyên thứ tự



/*const del = (index)=>{
    let newList = listPost
    newList.splice(index,1)
    setListPost([...newList])
}*/