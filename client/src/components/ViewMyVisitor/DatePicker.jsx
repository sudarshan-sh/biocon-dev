import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function MaterialUIPickers({ label, current }) {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        {/* <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
        {/* <MobileDatePicker
          label="Date mobile"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
        {/* <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
        <DatePicker
            label={label}
            value={current ? dayjs() : null}
            inputFormat="DD/MM/YYYY"
            // onChange={(newValue) => {
            //     setValue(newValue);
            // }}
            onChange={handleChange}
            renderInput={(params) => (
            <TextField
            sx={{
                // "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root": {
                //   fontSize: 12,
                // },
                "& .css-k4qjio-MuiFormHelperText-root": {
                  fontSize: 8,
                },
                "& .css-i4bv87-MuiSvgIcon-root": {
                  fontSize: 12,
                },
                "& .css-19qh8xo-MuiInputBase-input-MuiOutlinedInput-input": {
                  fontSize: 12,
                },
              }}
              InputLabelProps={{
                style: { fontSize: 12 },
              }}
              size="small"
                {...params} 
            />
            )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
