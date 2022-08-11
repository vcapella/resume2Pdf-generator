// import "./App.css";
import axios from "axios";
import { saveAs } from "file-saver";
import { useState } from "react";

function App() {
  //useState
  const [formValue, setFormValue] = useState({
    yourName: "",
    city: "",
    stateProvince: "",
    celNumber: "",
    emailAdd: "",
    linkedinUrl: "",
    anotherUrl: "",
    personalSummary: "",
    titlePosition1: "",
    companyName1: "",
    cityCompany1: "",
    stateCompany1: "",
    startDate1: "",
    endDate1: "",
    listAccomp1A: "",
    listAccomp1B: "",
    listAccomp1C: "",
    listAccomp1D: "",
    listAccomp1E: "",
    listAccomp1F: "",
    titlePosition2: "",
    companyName2: "",
    cityCompany2: "",
    stateCompany2: "",
    startDate2: "",
    endDate2: "",
    listAccomp2A: "",
    listAccomp2B: "",
    listAccomp2C: "",
    listAccomp2D: "",
    listAccomp2E: "",
    listAccomp2F: "",
    listOfSkills: "",
    gradYear1: "",
    schoolName1: "",
    stateSchool1: "",
    aboutSchoolProgram1: "",
    extraAcademicInfo1: "",
  });

  //handleChange to update form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  //value for each input
  const {
    yourName,
    city,
    stateProvince,
    celNumber,
    emailAdd,
    linkedinUrl,
    anotherUrl,
    personalSummary,
    titlePosition1,
    companyName1,
    cityCompany1,
    stateCompany1,
    startDate1,
    endDate1,
    listAccomp1A,
    listAccomp1B,
    listAccomp1C,
    listAccomp1D,
    listAccomp1E,
    listAccomp1F,
    titlePosition2,
    companyName2,
    cityCompany2,
    stateCompany2,
    startDate2,
    endDate2,
    listAccomp2A,
    listAccomp2B,
    listAccomp2C,
    listAccomp2D,
    listAccomp2E,
    listAccomp2F,
    listOfSkills,
    gradYear1,
    schoolName1,
    stateSchool1,
    aboutSchoolProgram1,
    extraAcademicInfo1,
  } = formValue;

  //blobs are immutable objects that represent raw data
  //save function
  const createAndDownloadPdf = (event) => {
    event.preventDefault(); //prevent page to auto refresh and erase data
    axios
      .post("/create-pdf", formValue)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      });
  };

  return (
    <div className="App">
      <form onSubmit={createAndDownloadPdf}>
        <div className="Introduction">
          <h2> Introduction</h2>
          <label>
            Enter your name
            <input
              type="text"
              placeholder="Victor Capella"
              name="yourName"
              onChange={handleChange}
              value={yourName}
            />
          </label>

          <label>
            Enter your city
            <input
              type="text"
              placeholder="Toronto"
              name="city"
              onChange={handleChange}
              value={city}
            />
          </label>

          <label>
            Enter your province
            <input
              type="text"
              placeholder="ON"
              name="stateProvince"
              onChange={handleChange}
              value={stateProvince}
            />
          </label>

          <label>
            Enter your phone number
            <input
              type="number"
              placeholder="555-555-5555"
              name="celNumber"
              onChange={handleChange}
              value={celNumber}
            />
          </label>

          <label>
            Enter your e-mail
            <input
              type="text"
              placeholder="name@email.com"
              name="emailAdd"
              onChange={handleChange}
              value={emailAdd}
            />
          </label>

          <label>
            Enter your Linkedin URL
            <input
              type="text"
              placeholder="https://www.linkedin.com/in/yourname/"
              name="linkedinUrl"
              onChange={handleChange}
              value={linkedinUrl}
            />
          </label>

          <label>
            Enter another URL
            <input
              type="text"
              placeholder="myportfolio.com"
              name="anotherUrl"
              onChange={handleChange}
              value={anotherUrl}
            />
          </label>

          <label>
            Your personal summary
            <input
              type="text"
              placeholder="Insert a brief about your background experience and passions"
              name="personalSummary"
              onChange={handleChange}
              value={personalSummary}
            />
          </label>
        </div>

        <div className="professionalExp">
          <h2>Professional Experience</h2>

          <label>
            Job title
            <input
              type="text"
              placeholder="Administrative Assistant"
              name="titlePosition1"
              onChange={handleChange}
              value={titlePosition1}
            />
          </label>

          <label>
            Company name
            <input
              type="text"
              placeholder="StarCraft Inc."
              name="companyName1"
              onChange={handleChange}
              value={companyName1}
            />
          </label>

          <label>
            Company location
            <input
              type="text"
              placeholder="Toronto"
              name="cityCompany1"
              onChange={handleChange}
              value={cityCompany1}
            />
            <input
              type="text"
              placeholder="Ontario"
              name="stateCompany1"
              onChange={handleChange}
              value={stateCompany1}
            />
          </label>

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
        <div className="professionalExp2">
          <h2>Professional Experience 2</h2>

          <label>
            Job title
            <input
              type="text"
              placeholder="Administrative Assistant"
              name="titlePosition2"
              onChange={handleChange}
              value={titlePosition2}
            />
          </label>

          <label>
            Company name
            <input
              type="text"
              placeholder="StarCraft Inc."
              name="companyName2"
              onChange={handleChange}
              value={companyName2}
            />
          </label>

          <label>
            Company location
            <input
              type="text"
              placeholder="Toronto"
              name="cityCompany2"
              onChange={handleChange}
              value={cityCompany2}
            />
            <input
              type="text"
              placeholder="Ontario"
              name="stateCompany2"
              onChange={handleChange}
              value={stateCompany2}
            />
          </label>

          <label>
            Start date / End Date
            <input
              type="text"
              placeholder="Jan/2020"
              name="startDate2"
              onChange={handleChange}
              value={startDate2}
            />
            <input
              type="text"
              placeholder="Jan/2022 or Present"
              name="endDate2"
              onChange={handleChange}
              value={endDate2}
            />
          </label>

          <label>
            Accomplishment list
            <input
              type="text"
              placeholder="List accomplishments, not responsibilities"
              name="listAccomp2A"
              onChange={handleChange}
              value={listAccomp2A}
            />
            <input
              type="text"
              placeholder="Make sure they’re written in a consistent form"
              name="listAccomp2B"
              onChange={handleChange}
              value={listAccomp2B}
            />
            <input
              type="text"
              placeholder="Use the active voice"
              name="listAccomp2C"
              onChange={handleChange}
              value={listAccomp2C}
            />
            <input
              type="text"
              placeholder="Quantify results wherever possible"
              name="listAccomp2D"
              onChange={handleChange}
              value={listAccomp2D}
            />
            <input
              type="text"
              placeholder="Match the language from the job description"
              name="listAccomp2E"
              onChange={handleChange}
              value={listAccomp2E}
            />
            <input
              type="text"
              placeholder="Another Accomplishment"
              name="listAccomp2F"
              onChange={handleChange}
              value={listAccomp2F}
            />
          </label>
        </div>
        <div className="professionalExp2">
          <h2>Education</h2>
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

        <input type="submit" download />
      </form>
    </div>
  );
}

export default App;
