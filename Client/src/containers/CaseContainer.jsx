import React, { useEffect, useState } from "react";
import Case from "../components/Case";
import "../styles/CaseContainer.css";
import axios from "axios";

function unsortArray(arr) {
  const unsortedArr = [...arr]; // create a copy of the original array
  for (let i = unsortedArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // generate a random index between 0 and i
    [unsortedArr[i], unsortedArr[j]] = [unsortedArr[j], unsortedArr[i]]; // swap the elements at indices i and j
  }
  return unsortedArr;
}

const CaseContainer = () => {
  const [items, setItems] = useState([]);
  const [caseList, setCaseList] = useState(false);
  const [screening, setScreening] = useState(false);
  const [predictHearings, setPredictHearings] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:4444/cases").then((res) => {
      console.log(res.data);
      setItems(res.data);
    });
  }, []);

  const handleScheduleCase = () => {
    setTimeout(() => {
      const unsortedItems = unsortArray(items);
      setItems(unsortedItems);
    }, 2000);
  };

  return (
    <div className="caseContainer">
      <div className="caseContainerHeader">
        <div
          className="action"
          onClick={() => {
            setCaseList(!caseList);
          }}
        >
          CaseList
        </div>
        <div
          className="action"
          onClick={() => {
            setTimeout(() => {
              setScreening(true);
            }, 2000);
          }}
        >
          Start Screening
        </div>
        <div
          className="action"
          onClick={() => {
            setTimeout(() => {
              setPredictHearings(true);
            }, 2000);
          }}
        >
          Predict Hearings
        </div>
        <div className="action" onClick={handleScheduleCase}>
          Schedule Case
        </div>
      </div>
      <div className="caseContainerBody">
        {caseList &&
          items?.map((item) => (
            <Case
              key={item.id}
              item={item}
              screening={screening}
              predictHearings={predictHearings}
            />
          ))}
      </div>
    </div>
  );
};

export default CaseContainer;
