import * as React from "react";
import { TextField, Grid, Button, Card, Typography } from "@mui/material";

export default function EducationForm({
  handleChange,
  listOfSkills,
  schoolName1,
  stateSchool1,
  aboutSchoolProgram1,
  gradYear1,
  extraAcademicInfo1,
  // DownloadBtn
}) {
  return (

    <Card className="Education"
      sx={{ boxShadow: 0, p: "30px 10px 30px 10px" }}>
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: "Bold", paddingBottom: "15px" }}
      >
        Education
      </Typography>
      <Grid container spacing={2}>

        <Grid xs={12} item>
          <TextField
            id="listOfSkills"
            name="listOfSkills"
            label="Skills"
            placeholder="Any soft or hard skill"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={listOfSkills}
            // style={{ width: 520, maxLength: 250 }}
            inputProps={{ maxLength: 160 }}
            // each field has width 250 +20 width gap between each
            multiline
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            id="schoolName1"
            name="schoolName1"
            label="School Name"
            placeholder="GeorgeBrown College"
            variant="outlined"
            fullWidth
            inputProps={{ maxLength: 50 }}
            onChange={handleChange}
            value={schoolName1}
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            id="stateSchool1"
            name="stateSchool1"
            label="School Location"
            placeholder="ON, Canada"
            variant="outlined"
            fullWidth
            inputProps={{ maxLength: 30 }}
            onChange={handleChange}
            value={stateSchool1}
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            id="aboutSchoolProgram1"
            name="aboutSchoolProgram1"
            label="School Program"
            placeholder="BS Computer Science or High School"
            variant="outlined"
            fullWidth
            inputProps={{ maxLength: 50 }}
            onChange={handleChange}
            value={aboutSchoolProgram1}
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            required
            type="number"
            id="gradYear1"
            name="gradYear1"
            label="Graduation Year"
            placeholder="2023"
            variant="outlined"
            fullWidth
            inputProps={{ maxLength: 4 }}
            onChange={handleChange}
            value={gradYear1}
          />
        </Grid>

        <Grid xs={12} item>

          <TextField
            required={true}
            type="text"
            id="extraAcademicInfo1"
            name="extraAcademicInfo1"
            label="Extra Curricuar Activity"
            placeholder="Write about any extra curricular activity or project."
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={extraAcademicInfo1}
            // style={{ width: 520, maxLength: 250 }}
            inputProps={{ maxLength: 160 }}
            // each field has width 250 +20 width gap between each
            multiline
          />
        </Grid>

        <Grid xs={12} item sx={{ mt: "10%" }} align="center">
          <Button type="submit" variant="contained" sx={{ minWidth: "300px", backgroundColor: "primary" }}>Submit</Button>
        </Grid>

      </Grid>
    </Card>

  );
}
