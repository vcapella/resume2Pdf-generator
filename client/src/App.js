import * as React from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { useState } from "react";
import IntroductionForm from "./IntroductionForm";
import ProfessionalExp1 from "./ProfessionalExp1";
import ProfessionalExp2 from "./ProfessionalExp2";
import EducationForm from "./EducationForm";
import DarkBtnBar from "./DarkBtnBar";
import { Card, CardContent } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

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
    // listAccomp1F: "",
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
    // listAccomp2F: "",
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
    // listAccomp1F,
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
    // listAccomp2F,
    listOfSkills,
    gradYear1,
    schoolName1,
    stateSchool1,
    aboutSchoolProgram1,
    extraAcademicInfo1,
  } = formValue;

  //blobs are immutable objects that represent raw data
  //save/download function
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

  //light and dark mode
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  //pallete for dark/light mode
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Card>
          <DarkBtnBar colorMode={colorMode} theme={theme} />
          <CardContent
            sx={{
              maxWidth: 500,
              margin: "0 auto",
              padding: "0px 5px",
            }}
          >
            <form autoComplete="off" onSubmit={createAndDownloadPdf}>
              <IntroductionForm
                yourName={yourName}
                handleChange={handleChange}
                city={city}
                stateProvince={stateProvince}
                celNumber={celNumber}
                emailAdd={emailAdd}
                linkedinUrl={linkedinUrl}
                anotherUrl={anotherUrl}
                personalSummary={personalSummary}
              />

              <ProfessionalExp1
                handleChange={handleChange}
                titlePosition1={titlePosition1}
                companyName1={companyName1}
                cityCompany1={cityCompany1}
                stateCompany1={stateCompany1}
                startDate1={startDate1}
                endDate1={endDate1}
                listAccomp1A={listAccomp1A}
                listAccomp1B={listAccomp1B}
                listAccomp1C={listAccomp1C}
                listAccomp1D={listAccomp1D}
                listAccomp1E={listAccomp1E}
                // listAccomp1F={listAccomp1F}
              />

              <ProfessionalExp2
                handleChange={handleChange}
                titlePosition2={titlePosition2}
                companyName2={companyName2}
                cityCompany2={cityCompany2}
                stateCompany2={stateCompany2}
                startDate2={startDate2}
                endDate2={endDate2}
                listAccomp2A={listAccomp2A}
                listAccomp2B={listAccomp2B}
                listAccomp2C={listAccomp2C}
                listAccomp2D={listAccomp2D}
                listAccomp2E={listAccomp2E}
                // listAccomp2F={listAccomp2F}
              />

              <EducationForm
                handleChange={handleChange}
                listOfSkills={listOfSkills}
                schoolName1={schoolName1}
                stateSchool1={stateSchool1}
                aboutSchoolProgram1={aboutSchoolProgram1}
                gradYear1={gradYear1}
                extraAcademicInfo1={extraAcademicInfo1}
                // DownloadBtn={createAndDownloadPdf}
              />
            </form>
          </CardContent>
        </Card>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
