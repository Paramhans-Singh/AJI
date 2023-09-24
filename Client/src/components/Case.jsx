import React, { useState } from 'react'
import '../styles/Case.css'

const Case = ({item}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className='case'>
      <div className='caseTop' onClick={()=>{setIsExpanded(!isExpanded)}}>
        <div className='caseDetails'>
          <div className='caseNumber'>Case Number: 
            <span className='caseNumberSpan'> {item.caseNumber}</span>
          </div>
          <div className='caseTitle'>{item.caseTitle}</div>
        </div>
        <div className='caseTags'>
          {item.caseTags.map((tag, index) => {
            return (
              <div className='caseTag' key={index}>{tag}</div>
            )
          })}
        </div>
        <div className='caseAge'>
          Case Age: 
          <div className='caseAgeNumber'>{item.caseScore}</div>
        </div>
        <div className='caseScore'>
          Case Score: 
          <div className='caseScoreNumber'>{item.caseScore}</div>
        </div>
        
        {isExpanded ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>}
      </div>
        {isExpanded &&
          <div className='caseDropdown'>
            <div className='box'>
              <div className='type'>
                <div className='title'>Filing Number:</div>
                <div className='value'>{item.filingNumber}</div>
              </div>
              <div className='type'>
                <div className='title'>Filing Date:</div>
                <div className='value'>{item.filingDate}</div>
              </div>
              <div className='type'>
                <div className='title'>Filing Court:</div>
                <div className='value'>{item.filingCourt}</div>
              </div>
              <div className='type'>
                <div className='title'>CNR Number:</div>
                <div className='value'>{item.cnrnumber}</div>
              </div>
            </div>
            <div className='box'>
              <div className='type'>
                <div className='title'>Judges Assigned:</div>
                <div className='value'>{item.judgesAssigned}</div>
              </div>
              <div className='type'>
                <div className='title'>Case Status:</div>
                <div className='value'>{item.caseStatus}</div>
              </div>
              <div className='type'>
                <div className='title'>Case Type:</div>
                <div className='value'>{item.caseType}</div>
              </div>
              <div className='type'>
                <div className='title'>Case Category:</div>
                <div className='value'>{item.caseCategory}</div>
              </div>
              <div className='type'>
                <div className='title'>Next Hearing:</div>
                <div className='value'>{item.nextHearing}</div>
              </div>
            </div>
            <div className='box'>
              <div className='type'>
                <div className='title'>Parties Involved:</div>
                <div className='value'>{item.partiesInvolved}</div>
              </div>
              <div className='type'>
                <div className='title'>Case Description:</div>
                <div className='value'>{item.caseDescription}</div>
              </div>
            </div>
          </div>
        }
    </div>
  )
}

export default Case



