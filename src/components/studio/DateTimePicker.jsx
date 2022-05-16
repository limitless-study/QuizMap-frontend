import styled from '@emotion/styled';

import DatePicker from 'react-datepicker';

import { useState } from 'react';

const DatePickerField = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '5px',
  '& input': {
    textAlign: 'center',
    fontSize: '14px',
    height: '25px',
    borderRadius: '15px',
    border: '1px solid #c1c1c1',
  },
});

export default function DateTimePicker({ cardsetDueDateTime, onChange }) {
  const [startDate, setStartDate] = useState(cardsetDueDateTime);

  const handleDateChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <DatePickerField>
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
        showTimeSelect
        minDate={new Date()}
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Time"
        placeholderText="When is the deadline?"
        dateFormat="yyyy-MM-dd HH:mm"
      />
    </DatePickerField>
  );
}
