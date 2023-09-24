import React from 'react'
import { Calendar } from '@mantine/dates';
import dayjs from 'dayjs';
import { useState } from 'react';
import '../styles/CalenderBox.css'

const CalenderBox = () => {
    const [selected, setSelected] = useState([]);
  const handleSelect = (date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };
  return (
    <Calendar
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
        onClick: () => handleSelect(date),
      })}
      className='calenderBox'
    />
  )
}

export default CalenderBox