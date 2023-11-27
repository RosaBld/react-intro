import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar({ todos }) {
  const [value, setValue] = React.useState(new Date());
  console.log(todos);

  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  )
};

export default MyCalendar;