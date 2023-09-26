import React, { useEffect, useState } from 'react'
import '../styles/JudgeList.css'
import Judge from '../components/Judge';
import axios from 'axios';

// const dummyJudgeDetailsArray = [
//     {
//       name: 'John Doe',
//       type: 'Federal Judge',
//       court: 'Supreme Court',
//       exp: 10,
//     },
//     {
//       name: 'Mary Smith',
//       type: 'Federal Judge',
//       court: 'District Court',
//       exp: 12,
//     },
//     {
//       name: 'Robert Johnson',
//       type: 'State Judge',
//       court: 'Circuit Court',
//       exp: 8,
//     },
//     {
//       name: 'Susan Lee',
//       type: 'Federal Judge',
//       court: 'Appellate Court',
//       exp: 15,
//     },
//     {
//       name: 'Michael Brown',
//       type: 'State Judge',
//       court: 'County Court',
//       exp: 7,
//     },
//     {
//       name: 'Linda Rodriguez',
//       type: 'Federal Judge',
//       court: 'Tax Court',
//       exp: 20,
//     },
//     {
//       name: 'Sarah Adams',
//       type: 'State Judge',
//       court: 'Municipal Court',
//       exp: 5,
//     },
//     {
//       name: 'David Wilson',
//       type: 'Federal Judge',
//       court: 'Bankruptcy Court',
//       exp: 18,
//     },
//     {
//       name: 'Jennifer White',
//       type: 'State Judge',
//       court: 'Family Court',
//       exp: 9,
//     },
//     {
//       name: 'Richard Thompson',
//       type: 'Federal Judge',
//       court: 'Immigration Court',
//       exp: 14,
//     },
//     {
//       name: 'Emily Davis',
//       type: 'State Judge',
//       court: 'Probate Court',
//       exp: 6,
//     },
//     {
//       name: 'Charles Green',
//       type: 'Federal Judge',
//       court: 'Trade Court',
//       exp: 16,
//     },
//     {
//       name: 'Patricia Hall',
//       type: 'State Judge',
//       court: 'Small Claims Court',
//       exp: 4,
//     },
//     {
//       name: 'Thomas Anderson',
//       type: 'Federal Judge',
//       court: 'Environmental Court',
//       exp: 11,
//     },
//     {
//       name: 'Jessica Martinez',
//       type: 'State Judge',
//       court: 'Traffic Court',
//       exp: 3,
//     },
//   ];


  
  
const JudgeList = () => {
  const [judgeArray, setJudgeArray] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:4444/judges')
    .then((res) => {
      setJudgeArray(res.data);
    })
  }, []);
  return (
    <div className='judgeList'>
        <div className='searchbar'>
            <i class="fa-solid fa-search"></i>
            <input type='text' placeholder='Search Judge' />
        </div>
        <div className='judges-container'>
            {judgeArray.map((judgeDetails,indx) => (
                <Judge details={judgeDetails} key={indx}/>
            ))}
        </div>
    </div>
  )
}

export default JudgeList