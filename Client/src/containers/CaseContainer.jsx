import React, { useEffect, useState } from 'react'
import Case from '../components/Case'
import '../styles/CaseContainer.css'
import axios from 'axios'



//  fetch the data from the backend and store it in items array

const CaseContainer = () => {
  const [items, setItems] = useState([])
  const [caseList, setCaseList] = useState(false)
  const [screening, setScreening] = useState(false)
  const [predictHearings, setPredictHearings] = useState(false)
  useEffect(() => {
    axios.get('http://localhost:4444/cases').then((res) => {
      console.log(res.data)
      setItems(res.data)
    })
  }, [])
  return (
    <div className='caseContainer'>
        <div className='caseContainerHeader'>
            <div className='action' onClick={()=>{setCaseList(!caseList)}}>
              CaseList
            </div>
            <div className='action' onClick={()=>{
             setTimeout(() => {
              setScreening(true)
              }, 5000); 
            }
              }>
              Start Screening
            </div>
            <div className='action' onClick={()=>{
             setTimeout(() => {
              setPredictHearings(true)
              }, 5000); 
            }
              }
            >
              Predict Hearings
            </div>
            <div className='action'>
              Action4
            </div>
        </div>
        <div className='caseContainerBody'>
            {caseList && items?.map((item) => (
                <Case key={item.id} item={item} screening={screening} predictHearings={predictHearings}/>
            ))}
        </div>
    </div>
  )
}

export default CaseContainer