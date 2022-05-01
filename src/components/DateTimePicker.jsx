import DatePicker from 'react-datepicker';

import { useState } from 'react';

export default function DateTimePicker({ cardsetDueDateTime, onChange }) {
  const [startDate, setStartDate] = useState(cardsetDueDateTime);

  const handleDateChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => handleDateChange(date)}
      showTimeSelect
      minDate={new Date()}
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      placeholderText="When is the deadline?"
      dateFormat="yy/MM/dd HH:mm"
    />
  );
}
