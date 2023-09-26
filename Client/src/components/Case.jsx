import React, { useState } from 'react'
import '../styles/Case.css'

const randomIntList = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 100)
);
const randomIntList2 = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 100)
);

function formatDate(inputDateString) {
  // Create a Date object from the input date string
  const date = new Date(inputDateString);

  // Define an array of month names
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // Get the day, month, and year from the Date object
  const day = date.getUTCDate();
  const monthIndex = date.getUTCMonth();
  const year = date.getUTCFullYear();

  // Format the date as "DD Month YYYY" and return it
  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
  return formattedDate;
}

// Example usage:
const inputDateString = "2023-01-15T00:00:00.000Z";
const formattedDate = formatDate(inputDateString);
console.log(formattedDate); // Output: "15 Jan 2023"


const Case = ({item,screening,predictHearings}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="case">
      <div
        className="caseTop"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <div className="caseDetails">
          <div className="caseNumber">
            Case Number:
            <span className="caseNumberSpan"> {item.caseNumber}</span>
          </div>
          <div className="caseTitle">{item.caseTitle}</div>
        </div>
        <div className="caseTags">
          <div className="caseTag">{item.caseType}</div>
        </div>
        {screening && (
          <div className="caseAge">
            Case Age:
            <div className="caseAgeNumber">{item.age}</div>
          </div>
        )}
        {predictHearings && (
          <div className="caseScore">
            Predicted Case Hearings:
            <div className="caseScoreNumber">{item.hearing}</div>
          </div>
        )}
        {isExpanded ? (
          <i class="fa-solid fa-caret-up"></i>
        ) : (
          <i class="fa-solid fa-caret-down"></i>
        )}
      </div>
      {isExpanded && (
        <div className="caseDropdown">
          <div className="box">
            <div className="type">
              <div className="title">Filing Number:</div>
              <div className="value">{item.fillingNumber}</div>
            </div>
            <div className="type">
              <div className="title">Filing Date:</div>
              <div className="value">{formatDate(item.caseFilingDate)}</div>
            </div>
            {/* <div className="type">
              <div className="title">Filing Court:</div>
              <div className="value">{item.filingCourt}</div>
            </div> */}
            <div className="type">
              <div className="title">CNR Number:</div>
              <div className="value">{item.CNRnumber}</div>
            </div>
          </div>
          <div className="box">
            <div className="type">
              <div className="title">Judges Assigned:</div>
              <div className="value">{item.judgesAssigned}</div>
            </div>
            <div className="type">
              <div className="title">Case Status:</div>
              <div className="value">{item.caseStatus}</div>
            </div>
            <div className="type">
              <div className="title">Case Type:</div>
              <div className="value">{item.caseType}</div>
            </div>
            <div className="type">
              <div className="title">Case Section:</div>
              <div className="value">{item.SectionList[0]}</div>
            </div>
            <div className="type">
              <div className="title">Next Hearing:</div>
              <div className="value">{formatDate(item.nextHearingDate)}</div>
            </div>
          </div>
          <div className="box">
            <div className="type">
              <div className="title">Parties Involved:</div>
              <div className="value">{item.partiesInvolved}</div>
            </div>
            {/* <div className="type">
              <div className="title">Case Description:</div>
              <div className="value">{item.caseDescription}</div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Case



