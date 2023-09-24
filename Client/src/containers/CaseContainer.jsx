import React from 'react'
import Case from '../components/Case'
import '../styles/CaseContainer.css'

const items = [
  {
    caseNumber: '001',
    caseTitle: 'Lorem Ipsum Case',
    caseDate: '2023-09-21',
    caseTags: ['Tag1', 'Tag2', 'Tag3'],
    caseScore: 85,
    filingNumber: 'F12345',
    filingDate: '2023-09-15',
    filingCourt: 'District Court',
    cnrnumber: 'CNR123',
    judgesAssigned: 'Judge Smith, Judge Johnson',
    caseStatus: 'Pending',
    caseType: 'Civil',
    caseCategory: 'Lawsuit',
    nextHearing: '2023-10-10',
    partiesInvolved: 'Plaintiff vs. Defendant',
    caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    caseNumber: '002',
    caseTitle: 'Sample Case',
    caseDate: '2023-09-20',
    caseTags: ['Tag4', 'Tag5'],
    caseScore: 92,
    filingNumber: 'F54321',
    filingDate: '2023-09-10',
    filingCourt: 'Supreme Court',
    cnrnumber: 'CNR456',
    judgesAssigned: 'Judge Davis',
    caseStatus: 'In Progress',
    caseType: 'Criminal',
    caseCategory: 'Prosecution',
    nextHearing: '2023-09-25',
    partiesInvolved: 'People vs. Defendant',
    caseDescription: 'This is a sample case description.'
  },
  {
    caseNumber: '003',
    caseTitle: 'Another Case',
    caseDate: '2023-09-19',
    caseTags: ['Tag6', 'Tag7'],
    caseScore: 78,
    filingNumber: 'F98765',
    filingDate: '2023-09-12',
    filingCourt: 'County Court',
    cnrnumber: 'CNR789',
    judgesAssigned: 'Judge White',
    caseStatus: 'Closed',
    caseType: 'Family',
    caseCategory: 'Divorce',
    nextHearing: 'N/A',
    partiesInvolved: 'Spouse A vs. Spouse B',
    caseDescription: 'Description of another case.'
  },
  {
    caseNumber: '004',
    caseTitle: 'Important Case',
    caseDate: '2023-09-18',
    caseTags: ['Tag8', 'Tag9'],
    caseScore: 95,
    filingNumber: 'F24680',
    filingDate: '2023-09-14',
    filingCourt: 'Federal Court',
    cnrnumber: 'CNR101',
    judgesAssigned: 'Judge Brown, Judge Miller',
    caseStatus: 'In Progress',
    caseType: 'Civil',
    caseCategory: 'Environmental Lawsuit',
    nextHearing: '2023-09-30',
    partiesInvolved: 'Environmental Agency vs. Corporation XYZ',
    caseDescription: 'Description of an important case.'
  },
  {
    caseNumber: '005',
    caseTitle: 'Land Dispute Case',
    caseDate: '2023-09-17',
    caseTags: ['Tag10', 'Tag11'],
    caseScore: 80,
    filingNumber: 'F13579',
    filingDate: '2023-09-11',
    filingCourt: 'Land Court',
    cnrnumber: 'CNR222',
    judgesAssigned: 'Judge Green',
    caseStatus: 'In Progress',
    caseType: 'Property',
    caseCategory: 'Land Dispute',
    nextHearing: '2023-09-28',
    partiesInvolved: 'Property Owner vs. Neighbor',
    caseDescription: 'Description of a land dispute case.'
  }
];

const CaseContainer = () => {
  return (
    <div className='caseContainer'>
        <div className='caseContainerHeader'>
            <div className='action'>
              Action1
            </div>
            <div className='action'>
              Action2
            </div>
            <div className='action'>
              Action3
            </div>
            <div className='action'>
              Action4
            </div>
        </div>
        <div className='caseContainerBody'>
            {items.map((item) => (
                <Case key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
}

export default CaseContainer