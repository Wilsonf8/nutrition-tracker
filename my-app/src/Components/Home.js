import './Home.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Add from './Add.js'

function Home (props) {

    // const [cals, setCals] = useState('Calories')

    const [info, setInfo] = useState([])
    const [currCals, setCurrCals] = useState(0)
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(()=> {        
        fetch('http://localhost:8081/testing')
        .then(res => {
            return res.json();
        })  
        .then(data => {
            // console.log(data)
            setInfo(data)
        })  
    }, [])

    

    return (
        <>
            <div className='boxes'>

            {info.map((data, i)=> (
                    <div className="div-a" key={i}>
                        <div>
                            <h1>{props.macro}</h1>
                        </div>
                    </div>
                    
                ))}

                {info.map((data, i)=> (
                    <div className="macro-count-div" key={i}>

                        <div>
                            <h1>{props.macro === 'Calories' && data.Calories}</h1>
                            <h1>{props.macro === 'Protein' && data.Protein}</h1>
                            <h1>{props.macro === 'Carbs' && data.Carbs}</h1>
                            <h1>{props.macro === 'Fat' && data.Fat}</h1>
                        </div>

                    </div>
                    
                ))}
                    {modalOpen && <Add closeModal={() => {setModalOpen(false)}} name={props.macro} info={info}/>}
                    <div className='div-c'>
                        <button className="edit-button" onClick={() => setModalOpen(true)}>edit</button>
                    </div>
                    
            </div>
        </>
    )
}

export default Home;