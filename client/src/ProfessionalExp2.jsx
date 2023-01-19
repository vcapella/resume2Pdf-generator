import TextField from "@mui/material/TextField";

export default function ProfessionalExp2 ({handleChange, titlePosition2, companyName2, cityCompany2, stateCompany2, startDate2, endDate2, listAccomp2A, listAccomp2B, listAccomp2C, listAccomp2D, listAccomp2E, listAccomp2F}) {
    return (
        <div>

            <TextField
            id="titlePosition2"
            label="Job Title"
            placeholder="Ninja Developer"
            name="titlePosition2"
            inputProps={{ maxLength: 50 }}
            onChange={handleChange}
            value={titlePosition2}
            />

            <TextField
            id="companyName2"
            label="Company Name"
            placeholder="Dev Warriors"
            name="companyName2"
            inputProps={{ maxLength: 50 }}
            onChange={handleChange}
            value={companyName2}
            />

            <TextField
            id="cityCompany2"
            label="Company Location"
            placeholder="Toronto"
            name="cityCompany2"
            inputProps={{ maxLength: 25 }}
            onChange={handleChange}
            value={cityCompany2}
            />

            <TextField
            id="stateCompany2"
            label="Company State/Province"
            placeholder="ON"
            name="stateCompany2"
            inputProps={{ maxLength: 2 }}
            onChange={handleChange}
            value={stateCompany2}
            />

            <TextField
            id="startDate2"
            label="Start Date"
            placeholder="Jan/2021"
            name="startDate2"
            inputProps={{ maxLength: 8 }}
            onChange={handleChange}
            value={startDate2}
            />

            <TextField
            id="endDate2"
            label="End Date/Present"
            placeholder="Dec/2021"
            name="endDate2"
            inputProps={{ maxLength: 8 }}
            onChange={handleChange}
            value={endDate2}
            />

            <TextField
            id="listAccomp2A"
            label="Accomplishment / Task"
            placeholder="List accomplishments, not responsibilities"
            name="listAccomp2A"
            inputProps={{ maxLength: 83 }}
            onChange={handleChange}
            value={listAccomp2A}
            />

            <TextField
            id="listAccomp2B"
            label="Accomplishment / Task"
            placeholder="Make sure they’re written in a consistent form"
            name="listAccomp2B"
            inputProps={{ maxLength: 83 }}
            onChange={handleChange}
            value={listAccomp2B}
            />

            <TextField
            id="listAccomp2C"
            label="Accomplishment / Task"
            placeholder="Use the active voice"
            name="listAccomp2C"
            inputProps={{ maxLength: 83 }}
            onChange={handleChange}
            value={listAccomp2C}
            />

            <TextField
            id="listAccomp2D"
            label="Accomplishment / Task"
            placeholder="Quantify results wherever possible"
            name="listAccomp2D"
            inputProps={{ maxLength: 83 }}
            onChange={handleChange}
            value={listAccomp2D}
            />

            <TextField
            id="listAccomp2E"
            label="Accomplishment / Task"
            placeholder="Match the language from the job description"
            name="listAccomp2E"
            inputProps={{ maxLength: 83 }}
            onChange={handleChange}
            value={listAccomp2E}
            />

            {/* <TextField
            id="listAccomp2F"
            label="Accomplishment / Task"
            placeholder="Another Accomplishment"
            name="listAccomp2F"
            inputProps={{ maxLength: 83 }}
            onChange={handleChange}
            value={listAccomp2F}
            />  removed due to limited space*/} 

        </div>
    )
}