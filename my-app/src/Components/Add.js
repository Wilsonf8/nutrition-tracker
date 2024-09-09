import './Add.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';

function Add(props) {

    // const [fromTable, setFromTable] = useState([])

    // useEffect(()=> {        
    //     axios.get('http://localhost:8081/testing')        
    //     .then(res => setFromTable(res.data))         
    //     .catch(err => console.log(err));    
    // }, [])  
    
    // console.log(fromTable)

    const navigate = useNavigate();
    const [time, setTime] = useState("CURTIME()")
    const [calsToAdd, setCalsToAdd] = useState(20)
    const [Calories, setCalories] = useState("20")
    const [proteinToAdd, setProteinToAdd] = useState(0)    
    const [carbsToAdd, setCarbsToAdd] = useState(0)
    const [fatToAdd, setFatToAdd] = useState(0)   
    const [id, setId] = useState('2') 
    const [col, setCol] = useState(props.name)

    var macro = props.name;
    console.log([`${macro}`])
    // setCol(props.macro)
    // console.log(macro)
    const newValues = {
        
    };

    function handleSubmit(event) {        
        event.preventDefault();  
        axios.put('http://localhost:8081/testing/update/'+[`${macro}`], {
                
            [`${macro}`]: calsToAdd
                

            })        
            .then(res => {            
                console.log(res); 
                Navigate('/')                 
            }).catch(err => console.log(err)); 
            window.location.reload()  
        }  
    const close = props.closeModal
    const info = props.info
    return (
        
        <form className='modal-container' onSubmit={handleSubmit} onClick={(e) => {
            if (e.target.className === 'modal-container') close()}}>
                <div className='form-div'>
                    {info.map((info) => (
                        <div>
                            <h1>{props.name === 'Calories' && info.Calories}</h1>
                            <h1>{props.name === 'Protein' && info.Protein}</h1>
                            <h1>{props.name === 'Carbs' && info.Carbs}</h1>
                            <h1>{props.name === 'Fat' && info.Fat}</h1>
                        </div>
                    ))}
                    <h2>{props.currCalCount}</h2>
                    <h1>{props.name}</h1>
                    <input onChange={e => setCalsToAdd(e.target.value)}></input>
                    <button type='submit' className="submit-button">Submit</button>
                </div>
        </form>
        
    )

}

export default Add;