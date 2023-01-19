import TextField from "@mui/material/TextField";

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

            <TextField
            id="startDate1"
            label="Start Date"
            placeholder="Jan/2022"
            name="startDate1"
            inputProps={{ maxLength: 8 }}
            onChange={handleChange}
            value={startDate1}
            />

            <TextField
            id="endDate1"
            label="End Date/Present"
            placeholder="Present"
            name="endDate1"
            inputProps={{ maxLength: 8 }}
            onChange={handleChange}
            value={endDate1}
            />

            <TextField
            id="listAccomp1A"
            label="Accomplishment / Task"
            placeholder="List accomplishments, not responsibilities"
            name="listAccomp1A"
            inputProps={{ maxLength: 83 }}
            onChange={handleChange}
            value={listAccomp1A}
            />

            <TextField
            id="listAccomp1B"
            label="Accomplishment / Task"
            placeholder="Make sure they’re written in a consistent form"
            name="listAccomp1B"
            inputProps={{ maxLength: 83 }}
            onChange={handleChange}
            value={listAccomp1B}
            />

            <TextField
            id="listAccomp1C"
            label="Accomplishment / Task"
            placeholder="Use the active voice"
            name="listAccomp1C"
            inputProps={{ maxLength: 83 }}
            onChange={handleChange}
            value={listAccomp1C}
            />

            <TextField
            id="listAccomp1D"
            label="Accomplishment / Task"
            placeholder="Quantify results wherever possible"
            name="listAccomp1D"
            inputProps={{ maxLength: 83 }}
            onChange={handleChange}
            value={listAccomp1D}
            />

            <TextField
            id="listAccomp1E"
            label="Accomplishment / Task"
            placeholder="Match the language from the job description"
            name="listAccomp1E"
            inputProps={{ maxLength: 83 }}
            onChange={handleChange}
            value={listAccomp1E}
            />

            {/* <TextField
            id="listAccomp1F"
            label="Accomplishment / Task"
            placeholder="Another Accomplishment"
            name="listAccomp1F"
            inputProps={{ maxLength: 83 }}
            onChange={handleChange}
            value={listAccomp1F}
            /> removed due to limited space */}

        </div>
    )
}