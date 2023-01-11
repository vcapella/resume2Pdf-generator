


export default function EducationForm ({handleChange, listOfSkills, schoolName1, stateSchool1, aboutSchoolProgram1, gradYear1, extraAcademicInfo1}) {
    return (
        <div>
            <label>
          Skills
          <input
            type="text"
            placeholder="Productivity Tools, Web Tools, Databases, Common Software, Commercial Technologies"
            name="listOfSkills"
            onChange={handleChange}
            value={listOfSkills}
          />
        </label>

        <label>
          School name
          <input
            type="text"
            placeholder="School name eg: University of Toronto"
            name="schoolName1"
            onChange={handleChange}
            value={schoolName1}
          />
        </label>
        <label>
          School location
          <input
            type="text"
            placeholder="School location eg: ON, Canada"
            name="stateSchool1"
            onChange={handleChange}
            value={stateSchool1}
          />
        </label>
        <label>
          School program
          <input
            type="text"
            placeholder="School program eg:BS Computer Science"
            name="aboutSchoolProgram1"
            onChange={handleChange}
            value={aboutSchoolProgram1}
          />
        </label>
        <label>
          Graduation year
          <input
            type="text"
            placeholder="Graduation year"
            name="gradYear1"
            onChange={handleChange}
            value={gradYear1}
          />
        </label>
        <label>
          Extra curricular activity
          <input
            type="text"
            placeholder="Write about any extra curricular activity or project."
            name="extraAcademicInfo1"
            onChange={handleChange}
            value={extraAcademicInfo1}
          />
        </label>
        </div>
    )
}