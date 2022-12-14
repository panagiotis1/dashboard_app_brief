import React, { useState, useEffect } from 'react';
import Loader from "../Components/Loader"
import "./Colors.css"
 
export default function TableData() {
    const [isLoading, setIsLoading] = useState(true);

    const [items, setItems] = useState({data: []})
    const URL = 'https://reqres.in/api/products/'
 
    useEffect(() => {
        fetchData()
    }, [])
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
            .then((response) => {
                console.log(response);
                setItems(response);
                setIsLoading(false)
            })
 
    }
 
    return (
        <div>
            {isLoading ? <Loader /> :
                <div>
                    <div className='colorsHeader'>
                        <h1 className='colors'>Colors</h1>
                        <h3 className='itemsNum'>items: {items.data.length}</h3>
                    </div>
                    <tbody>
                        {items.data
                            .sort((a, b) => { return b.year - a.year; })
                            .map((item, i) => (
                            <tr className='box' style={{backgroundColor:item.color}} key={i}>
                                <div className='colorCodePosition'>
                                    <td className='colorCode' style={{color:item.color}}>{item.color}</td>
                                </div>
                                <div className='nameYear'>
                                    <td>{item.name}</td>
                                    <td>{item.year}</td>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </div>
            }
        </div>
    );
}