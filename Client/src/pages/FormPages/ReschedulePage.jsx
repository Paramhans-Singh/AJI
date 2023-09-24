import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ReschedulePage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [reason, setReason] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement your leave submission logic here
    if (selectedDate) {
      // Implement your reschedule logic here
      console.log('Selected Date for Reschedule:', selectedDate);
      // You can send the new date to your backend or perform any other actions
    } else {
      console.log('Please select a new date for rescheduling.');
    }
  };


  return (
    <div className="reschedule-page">
      <h3>Reschedule Page</h3>
<form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <input
            type="text"
            id="reason"
            name="reason"
            value={reason}
            onChange={handleReasonChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Select a Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            id="date"
            name="date"
          />
        </div>
        <button type="submit">Submit Reschedule Request</button>
      </form>
      </div> 
  );
}

export default ReschedulePage;
