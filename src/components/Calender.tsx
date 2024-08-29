import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Calender() {
  const [value, setValue] = useState(new Date());

  return (
    <div className='w-60 h-40'>
      <Calendar
        onChange={setValue}
        value={value}
      />
    </div>
  );
}

export default Calender;
