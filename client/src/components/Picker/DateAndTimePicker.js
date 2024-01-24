import React from 'react'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker } from 'antd';
dayjs.extend(customParseFormat);

const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };
const DateAndTimePicker = ({setDate}) => {

    const onChange = (dte, dateString) => {
        setDate(dateString);
      };

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');
      };

      const disabledDateTime = () => ({
        disabledHours: () => range(0, 24).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      });

  return (
    <div>
      <DatePicker
      style={{width:"100%"}}
      format="YYYY-MM-DD HH:mm"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{
        defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
      }}
      onChange={onChange}
    />
    </div>
  )
}

export default DateAndTimePicker
