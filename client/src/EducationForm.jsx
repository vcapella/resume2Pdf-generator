
import TextField from "@mui/material/TextField";

export default function EducationForm ({handleChange, listOfSkills, schoolName1, stateSchool1, aboutSchoolProgram1, gradYear1, extraAcademicInfo1}) {
    return (
      <div>

        <TextField
        id="listOfSkills"
        label="Skills"
        placeholder="Any soft or hard skill"
        name="listOfSkills"
        onChange={handleChange}
        value={listOfSkills}
        style={{ width: 520, maxLength: 250 }}
        inputProps={{ maxLength: 163 }}
        // each field has width 250 +20 width gap between each
        multiline
        />

        <TextField
        id="schoolName1"
        label="School Name"
        placeholder="GeorgeBrown College"
        name="schoolName1"
        inputProps={{ maxLength: 50 }}
        onChange={handleChange}
        value={schoolName1}
        />

        <TextField
        id="stateSchool1"
        label="School Location"
        placeholder="ON, Canada"
        name="stateSchool1"
        inputProps={{ maxLength: 30 }}
        onChange={handleChange}
        value={stateSchool1}
        />

        <TextField
        id="aboutSchoolProgram1"
        label="School Program"
        placeholder="BS Computer Science or High School"
        name="aboutSchoolProgram1"
        inputProps={{ maxLength: 50 }}
        onChange={handleChange}
        value={aboutSchoolProgram1}
        />

        <TextField
        id="gradYear1"
        label="Graduation Year"
        placeholder="2023"
        name="gradYear1"
        inputProps={{ maxLength: 4 }}
        onChange={handleChange}
        value={gradYear1}
        />

        <TextField
        id="extraAcademicInfo1"
        label="Extra Curricuar Activity"
        placeholder="Write about any extra curricular activity or project."
        name="extraAcademicInfo1"
        onChange={handleChange}
        value={extraAcademicInfo1}
        style={{ width: 520, maxLength: 250 }}
        inputProps={{ maxLength: 163 }}
        // each field has width 250 +20 width gap between each
        multiline
        />

      </div>
    )
}