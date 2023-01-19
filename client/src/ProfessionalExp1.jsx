import TextField from "@mui/material/TextField";
// import * as React from 'react';
// // import dayjs from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function ProfessionalExp1 ({handleChange , titlePosition1, companyName1, cityCompany1, stateCompany1, startDate1, endDate1, listAccomp1A, listAccomp1B, listAccomp1C, listAccomp1D, listAccomp1E, listAccomp1F}) {
    
    return (
        <div>

            <TextField
            id="titlePosition1"
            label="Job Title"
            placeholder="Ninja Developer"
            name="titlePosition1"
            inputProps={{ maxLength: 50 }}
            onChange={handleChange}
            value={titlePosition1}
            />

            <TextField
            id="companyName1"
            label="Company Name"
            placeholder="Dev Warriors"
            name="companyName1"
            inputProps={{ maxLength: 50 }}
            onChange={handleChange}
            value={companyName1}
            />

            <TextField
            id="cityCompany1"
            label="Company Location"
            placeholder="Toronto"
            name="cityCompany1"
            inputProps={{ maxLength: 25 }}
            onChange={handleChange}
            value={cityCompany1}
            />

            <TextField
            id="stateCompany1"
            label="Company State/Province"
            placeholder="ON"
            name="stateCompany1"
            inputProps={{ maxLength: 2 }}
            onChange={handleChange}
            value={stateCompany1}
            />

            <label>
                Start date / End Date
                <input
                type="text"
                placeholder="Jan/2020"
                name="startDate1"
                onChange={handleChange}
                value={startDate1}
                />
                <input
                type="text"
                placeholder="Jan/2022 or Present"
                name="endDate1"
                onChange={handleChange}
                value={endDate1}
                />
            </label>
            
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={startDate1}
        onChange={handleChange}
      />
    </LocalizationProvider> */}

            <label>
                Accomplishment list
                <input
                type="text"
                placeholder="List accomplishments, not responsibilities"
                name="listAccomp1A"
                onChange={handleChange}
                value={listAccomp1A}
                />
                <input
                type="text"
                placeholder="Make sure they’re written in a consistent form"
                name="listAccomp1B"
                onChange={handleChange}
                value={listAccomp1B}
                />
                <input
                type="text"
                placeholder="Use the active voice"
                name="listAccomp1C"
                onChange={handleChange}
                value={listAccomp1C}
                />
                <input
                type="text"
                placeholder="Quantify results wherever possible"
                name="listAccomp1D"
                onChange={handleChange}
                value={listAccomp1D}
                />
                <input
                type="text"
                placeholder="Match the language from the job description"
                name="listAccomp1E"
                onChange={handleChange}
                value={listAccomp1E}
                />
                <input
                type="text"
                placeholder="Another Accomplishment"
                name="listAccomp1F"
                onChange={handleChange}
                value={listAccomp1F}
                />
            </label>
        </div>
    )
}