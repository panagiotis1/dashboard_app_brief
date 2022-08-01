import React, { useState, useEffect } from 'react';
import Loader from "../Components/Loader"
import './Users.css'

export default function Users() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([])
    const [initial, setInitial] = useState(true)
    const URL = 'https://reqres.in/api/users/'

    useEffect(() => {
        if(sessionStorage.getItem('item-list')){
            setItems(JSON.parse(sessionStorage.getItem('item-list')))
        } else {
            fetch(URL)
            .then((res) =>
            res.json())
            .then((response) => {
                console.log(response.data);
                setItems(response.data.map(x => { return { ...x, isChecked: false } }));
            })
        }
    }, [])
    
    useEffect(() => {
        if(!initial) {
            setIsLoading(false)
            sessionStorage.setItem('item-list', JSON.stringify(items))
        } else {
            setInitial(false);
        }
    }, [items])
    
    function checkBoxHandler(id) {
        setItems(state => state.map(x => {
            return x.id === id ? { ...x, isChecked: !x.isChecked } : x
        })
        )
    }

    const rowDelete = () => {
        sessionStorage.getItem(setItems(state=>{
            return state.filter(x=>!x.isChecked)
            }))
    }

    return (
        <div>
            {isLoading ? <Loader /> :
                <div className='app-container'>
                    <h1>Users</h1>
                    <button
                        className='buttonClass'
                        disabled={!items.find(x => x.isChecked)}
                        onClick={() => rowDelete()}
                    >DELETE</button>
                    <table>
                        <thead>
                            <tr>
                                <th> </th>
                                <th>ID</th>
                                <th>LAST NAME</th>
                                <th>FIRST NAME</th>
                                <th>EMAIL</th>
                                <th>AVATAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items
                                .map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={item.isChecked}
                                                onChange={()=>checkBoxHandler(item.id)}
                                            ></input>
                                        </td>
                                        <td>{item.id}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            {item.avatar
                                                .split('.').slice(0, -1).join('.')
                                                .slice(28)
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}