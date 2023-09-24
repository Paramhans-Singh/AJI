import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function LeavePage() {
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
    console.log('Reason:', reason);
    console.log('Selected Date:', selectedDate);
  };

  return (
    <div className="leave-page">
      <h3>Leave Page</h3>
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
        <button type="submit">Submit Leave Request</button>
      </form>
    </div>
  );
}

export default LeavePage;
